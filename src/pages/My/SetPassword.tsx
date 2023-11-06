import { ProForm, ProFormInstance, ProFormText } from '@ant-design/pro-components'
import React, { useRef } from 'react'

const MySetPassword: React.FC = () => {
  const formRef = useRef<ProFormInstance>()
  return (
    <ProForm<any>
      style={{ width: 600 }}
      formRef={formRef}
      layout='horizontal'
      labelCol={{ span: 3 }}
      rowProps={{ gutter: 16 }}
      onFinish={async values => {
        console.log('values', values)
      }}
    >
      <ProFormText.Password name='oldPassword' label='旧密码' placeholder='请输入旧密码' />
      <ProFormText.Password name='newPassword1' label='新密码' placeholder='请输入新密码' />
      <ProFormText.Password name='newPassword2' label='确认密码' placeholder='请确认密码' />
    </ProForm>
  )
}

export default MySetPassword
