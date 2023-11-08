import React, { useRef } from 'react'
import {
  ProForm,
  ProFormInstance,
  ProFormRadio,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components'

const MyBasicInfo: React.FC<any> = () => {
  const formRef = useRef<ProFormInstance>()
  return (
    <ProForm<any>
      style={{ width: 600 }}
      formRef={formRef}
      layout="horizontal"
      labelCol={{ span: 3 }}
      rowProps={{ gutter: 16 }}
      onFinish={async (values) => {
        console.log('values', values)
      }}
    >
      <ProFormText
        name="loginName"
        label="登入账号"
        placeholder="请输入登入账号"
        initialValue="张三"
        readonly
      />
      <ProFormText
        name="username"
        label="用户姓名"
        placeholder="请输入用户姓名"
      />
      <ProFormRadio.Group
        name="gender"
        label="性别"
        options={[
          {
            label: '男',
            value: 1
          },
          {
            label: '女',
            value: 2
          }
        ]}
      />
      <ProFormText name="phone" label="手机号码" placeholder="请输入手机号码" />
      <ProFormText
        name="email"
        label="电子邮箱"
        placeholder="请输入电子邮箱"
        rules={[{ type: 'email' }]}
      />
      <ProFormTextArea
        name="address"
        label="联系地址"
        placeholder="请输入联系地址"
      />
    </ProForm>
  )
}

export default MyBasicInfo
