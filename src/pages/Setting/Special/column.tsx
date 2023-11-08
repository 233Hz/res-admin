import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { SpecialItem } from '@/types/special'
import CustomModalForm from './CustomModalForm'
import { DeleteOutlined } from '@ant-design/icons'

const columns: ProColumns<SpecialItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '特色专题标题',
    dataIndex: 'title',
    align: 'center'
  },
  {
    title: '特色专题链接',
    dataIndex: 'link',
    align: 'center',
    search: false
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

export const defaultData: SpecialItem[] = [
  {
    id: 1,
    title: 'TEST',
    link: 'www.baidu.com',
    createTime: '2021-08-12 11:11:11'
  },
  {
    id: 2,
    title: 'TESTTEST',
    link: 'www.baidu.com',
    createTime: '2021-08-12 11:11:11'
  },
  {
    id: 3,
    title: 'TESTTESTTEST',
    link: 'www.baidu.com',
    createTime: '2021-08-12 11:11:11'
  }
]

export default columns
