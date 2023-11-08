import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { DeptItem } from '@/types/dept'
import CustomModalForm from './CustomModalForm'
import { DeleteOutlined } from '@ant-design/icons'

const columns: ProColumns<DeptItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '部门名称',
    dataIndex: 'deptName',
    align: 'center'
  },
  {
    title: '添加时间',
    dataIndex: 'createTime',
    sorter: true,
    search: false,
    align: 'center'
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    align: 'center',
    width: 1,
    render: (text, record, _, action) => {
      console.log(text, record, _, action)
      return [
        <CustomModalForm key="editable" type="update" form={record} />,
        <Button type="link" key="deletable" icon={<DeleteOutlined />} danger>
          删除
        </Button>
      ]
    }
  }
]

export const defaultData: DeptItem[] = [
  {
    id: 1,
    deptName: 'TEST',
    createTime: '2021-01-01 12:00:00'
  }
]

export default columns
