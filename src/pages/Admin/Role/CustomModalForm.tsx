import React from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { ModalForm, ProFormText } from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import type { RoleItem } from '@/types/role'

export interface Props {
  form?: Partial<RoleItem>
  type: CustomModalType
}

const triggerType = (type: CustomModalType) => {
  if (type === 'add') {
    return (
      <Button type='primary' icon={<PlusOutlined />}>
        添加
      </Button>
    )
  } else if (type === 'update') {
    return (
      <Button type='link' icon={<EditOutlined />}>
        编辑
      </Button>
    )
  }
}

const CustomModalForm: React.FC<Props> = props => (
  <ModalForm
    trigger={triggerType(props.type)}
    onFinish={async (values: RoleItem) => {
      console.log(values)
      message.success('提交成功')
    }}
    initialValues={{ ...props.form }}
  >
    <ProFormText
      name='roleName'
      label='角色名称'
      placeholder='请输入角色名称'
      rules={[{ required: true }]}
    />
    <ProFormText name='roleDesc' label='角色描述' placeholder='请输入角色描述' />
  </ModalForm>
)

export default CustomModalForm
