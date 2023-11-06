import React from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { ModalForm, ProFormText, ProFormUploadDragger } from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import { AllianceItem } from '@/types/alliance'

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
        name='name'
        label='双创联盟名称'
        placeholder='请输入双创联盟名称'
        rules={[{ required: true }]}
      />
      <ProFormText
        name='link'
        label='双创联盟链接'
        placeholder='请输入双创联盟链接'
        rules={[{ required: true }]}
      />
      <ProFormUploadDragger
        name='file'
        label='上传图片'
        rules={[{ required: true, message: '请上传图片' }]}
        description=''
        max={1}
      />
    </ModalForm>
  )
}

export default CustomModalForm
