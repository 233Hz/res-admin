import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { RoleItem } from '@/types/role'
import CustomModalForm from './CustomModalForm'
import { DeleteOutlined } from '@ant-design/icons'

const columns: ProColumns<RoleItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '角色名称',
    dataIndex: 'roleName',
    align: 'center'
  },
  {
    title: '角色描述',
    dataIndex: 'roleDesc',
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

export const defaultData: RoleItem[] = [
  {
    id: 1,
    roleName: 'TEST',
    roleDesc: '测试'
  }
]

export default columns
