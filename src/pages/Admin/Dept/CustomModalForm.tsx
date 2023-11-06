import React from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { ModalForm, ProFormText } from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import type { DeptItem } from '@/types/dept'

export interface Props {
  form?: Partial<DeptItem>
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
    onFinish={async (values: DeptItem) => {
      console.log(values)
      message.success('提交成功')
    }}
    initialValues={{ ...props.form }}
  >
    <ProFormText
      name='deptName'
      label='部门名称'
      placeholder='请输入部门名称'
      rules={[{ required: true }]}
    />
  </ModalForm>
)

export default CustomModalForm
