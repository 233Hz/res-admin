import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { CategoryItem } from '@/types/category'
import CustomModalForm from './CustomModalForm'
import { DeleteOutlined } from '@ant-design/icons'

const columns: ProColumns<CategoryItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '分类名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '链接资源',
    dataIndex: 'linkRes',
    align: 'center',
    valueEnum: {
      1: {
        text: '是'
      },
      2: {
        text: '否'
      }
    }
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

export const defaultData: CategoryItem[] = [
  {
    id: 1,
    name: 'TEST',
    pid: 0,
    linkRes: 1,
    createTime: '2021-08-12 11:11:11'
  },
  {
    id: 2,
    name: 'TEST2',
    pid: 0,
    linkRes: 2,
    createTime: '2021-08-12 11:11:11'
  },
  {
    id: 3,
    name: 'TEST3',
    pid: 0,
    linkRes: 1,
    createTime: '2021-08-12 11:11:11'
  }
]

export default columns
