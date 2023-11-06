import React from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import {
  ModalForm,
  ProFormField,
  ProFormText,
  ProFormUploadDragger
} from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import { AllianceItem } from '@/types/alliance'
import CustomEditor from '@/components/CustomEditor'

export interface Props {
  form?: Partial<AllianceItem>
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

const CustomModalForm: React.FC<Props> = props => {
  return (
    <ModalForm<AllianceItem>
      trigger={triggerType(props.type)}
      grid
      onFinish={async values => {
        console.log(values)
        message.success('提交成功')
      }}
      initialValues={{ ...props.form }}
    >
      <ProFormText
        name='title'
        label='公告标题'
        placeholder='请输入公告标题'
        rules={[{ required: true }]}
      />
      <ProFormField name='content' label='通知内容' colProps={{ span: 24 }}>
        <CustomEditor />
      </ProFormField>
      <ProFormUploadDragger
        name='file'
        label='通知附件'
        rules={[{ required: true, message: '请上传附件' }]}
        description=''
        max={1}
      />
    </ModalForm>
  )
}

export default CustomModalForm
