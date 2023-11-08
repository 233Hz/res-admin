import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import CustomModalForm from './CustomModalForm'
import { DeleteOutlined } from '@ant-design/icons'
import { NotifyItem } from '@/types/notify'

const columns: ProColumns<NotifyItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '公告标题',
    dataIndex: 'title',
    align: 'center'
  },
  {
    title: '公告标题',
    dataIndex: 'createUser',
    align: 'center',
    search: false
  },
  {
    title: '公告标题',
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

export const defaultData: NotifyItem[] = [
  {
    id: 1,
    title: 'TEST',
    createUser: '李四',
    createTime: '2021-08-12 11:11:11',
    content: '这是一段内容'
  },
  {
    id: 2,
    title: 'TESTTEST',
    createUser: '李四',
    createTime: '2021-08-12 11:11:11',
    content: '这是一段内容这是一段内容'
  },
  {
    id: 3,
    title: 'TESTTESTTEST',
    createUser: '李四',
    createTime: '2021-08-12 11:11:11',
    content: '这是一段内容这是一段内容这是一段内容'
  }
]

export default columns
