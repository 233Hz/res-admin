import { RefObject } from 'react'
import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { ColumnItem } from '@/types/column'
import CustomModalForm from './CustomModalForm'
import {
  AudioMutedOutlined,
  DeleteOutlined,
  SendOutlined
} from '@ant-design/icons'
import { CustomPublishModalRef } from './CustomPublishModal'
import { CustomAuthModalRef } from './CustomAuthModal'

const getColumns = (
  publishModalRef: RefObject<CustomPublishModalRef>,
  authModalRef: RefObject<CustomAuthModalRef>
): ProColumns<ColumnItem>[] => {
  return [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
      align: 'center'
    },
    {
      title: '栏目名称',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '上级栏目',
      dataIndex: 'pColumn',
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
          </Button>,
          <Button
            type="link"
            key="publish"
            icon={<SendOutlined />}
            onClick={() => publishModalRef.current?.showModal()}
          >
            发布权限
          </Button>,
          <Button
            type="link"
            key="audit"
            icon={<AudioMutedOutlined />}
            onClick={() => authModalRef.current?.showModal()}
          >
            审核权限
          </Button>
        ]
      }
    }
  ]
}

export const defaultData: ColumnItem[] = [
  {
    id: 1,
    name: 'TEST',
    pid: 0,
    pColumn: '根目录'
  }
]

export default getColumns
