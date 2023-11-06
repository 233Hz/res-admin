import React from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { ModalForm, ProFormRadio, ProFormText } from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import { CategoryItem } from '@/types/category'

export interface Props {
  form?: Partial<CategoryItem>
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
  <ModalForm<CategoryItem>
    trigger={triggerType(props.type)}
    onFinish={async values => {
      console.log(values)
      message.success('提交成功')
    }}
    initialValues={{ ...props.form }}
  >
    <ProFormText
      name='name'
      label='分类名称'
      placeholder='请输入部门名称'
      rules={[{ required: true }]}
    />
    <ProFormRadio.Group
      name='linkRes'
      label='链接资源'
      initialValue={1}
      options={[
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 2
        }
      ]}
      rules={[{ required: true }]}
    />
  </ModalForm>
)

export default CustomModalForm
