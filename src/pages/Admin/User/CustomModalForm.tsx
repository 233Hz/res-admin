import React from 'react'
import { Button, message } from 'antd'
import type { UserItem } from '@/types/user'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import {
  ModalForm,
  ProForm,
  ProFormDatePicker,
  ProFormDependency,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components'
import { pageDept } from '@/api/dept'
import { pageRole } from '@/api/role'
import type { CustomModalType } from '@/types/global'

export interface Props {
  form?: Partial<UserItem>
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
  <ModalForm<UserItem>
    trigger={triggerType(props.type)}
    onFinish={async values => {
      console.log(values)
      message.success('提交成功')
    }}
    initialValues={{ ...props.form }}
  >
    <ProForm.Group>
      <ProFormText
        width='md'
        name='loginName'
        label='登录账号'
        placeholder='请输入登录账号'
        rules={[{ required: true }]}
      />
      <ProFormSelect
        width='md'
        name='deptId'
        label='所在部门'
        placeholder='请选择所在部门'
        request={async () => {
          const { data } = await pageDept()
          return data.data.list.map(item => {
            return {
              label: item.deptName,
              value: item.id
            }
          })
        }}
        rules={[{ required: true }]}
      />
      <ProFormText
        width='md'
        name='username'
        label='用户姓名'
        placeholder='请输入用户姓名'
        rules={[{ required: true }]}
      />
      <ProFormRadio.Group
        name='gender'
        label='性别'
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
        rules={[{ required: true }]}
      />
      <ProFormText
        width='md'
        name='phone'
        label='手机号码'
        placeholder='请输入手机号码'
        rules={[{ required: true }]}
      />
      <ProFormText
        width='md'
        name='email'
        label='电子邮箱'
        placeholder='请输入电子邮箱'
        rules={[{ required: true }, { type: 'email' }]}
      />
      <ProFormSelect
        width='md'
        name='roleId'
        label='用户角色'
        placeholder='请选择用户角色'
        request={async () => {
          const { data } = await pageRole()
          return data.data.list.map(item => {
            return {
              label: item.roleName,
              value: item.id
            }
          })
        }}
        rules={[{ required: true }]}
      />
      <ProFormDependency name={['roleId']}>
        {({ roleId }) => {
          return roleId ? (
            <ProFormDatePicker
              width='md'
              name='validPeriod'
              label='有效期至'
              placeholder='不填永久有效'
            />
          ) : null
        }}
      </ProFormDependency>
      <ProFormText width='md' name='idCard' label='身份证' placeholder='请输入身份证' />
    </ProForm.Group>
    <ProFormTextArea name='address' label='联系地址' placeholder='请输入联系地址' />
  </ModalForm>
)

export default CustomModalForm
