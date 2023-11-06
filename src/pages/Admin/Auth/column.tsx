import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { RoleItem } from '@/types/role'
import { SettingOutlined } from '@ant-design/icons'
import { RefObject } from 'react'
import { CustomTreeModalRef } from './CustomTreeModal'

const getColumns = (modelRef: RefObject<CustomTreeModalRef>): ProColumns<RoleItem>[] => {
  console.log(modelRef)

  return [
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
          <Button
            type='link'
            key='editable'
            icon={<SettingOutlined />}
            onClick={() => modelRef.current?.showModal()}
          >
            分配权限
          </Button>
        ]
      }
    }
  ]
}

export const defaultData = [
  {
    id: 1,
    roleName: 'TEST',
    roleDesc: '测试'
  }
]

export default getColumns
