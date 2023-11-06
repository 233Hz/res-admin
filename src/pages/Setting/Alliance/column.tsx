import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { AllianceItem } from '@/types/alliance'
import CustomModalForm from './CustomModalForm'
import { DeleteOutlined } from '@ant-design/icons'

const columns: ProColumns<AllianceItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '双创联盟名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '双创联盟链接',
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
        <CustomModalForm key='editable' type='update' form={record} />,
        <Button type='link' key='deletable' icon={<DeleteOutlined />} danger>
          删除
        </Button>
      ]
    }
  }
]

export const defaultData: AllianceItem[] = [
  {
    id: 1,
    name: 'TEST',
    link: 'www.baidu.com',
    createTime: '2021-08-12 11:11:11'
  },
  {
    id: 2,
    name: 'TESTTEST',
    link: 'www.baidu.com',
    createTime: '2021-08-12 11:11:11'
  },
  {
    id: 3,
    name: 'TESTTESTTEST',
    link: 'www.baidu.com',
    createTime: '2021-08-12 11:11:11'
  }
]

export default columns
