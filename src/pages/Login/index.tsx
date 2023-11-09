import React from 'react'
import logo from '@/assets/logo.png'
import { Button, Form, Input } from 'antd'
import { LoginForm } from '@/types/login'
import { userLogin } from '@/store/modules/auth'
import { useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onFinish = async (values: LoginForm) => {
    await dispatch(userLogin(values))
    navigate('/index')
  }
  return (
    <div className="w-full h-full p-[20px] flex flex-col justify-center items-center pb-[20%]">
      <div className="flex justify-center items-center gap-[8px]">
        <span className="w-[60px] h-[60px]">
          <img src={logo} alt="logo" />
        </span>
        <span className="text-[24px] font-bold">创新创业平台管理</span>
      </div>
      <Form className="w-[328px] mt-[40px]" onFinish={onFinish} size="large">
        <Form.Item<LoginForm>
          required
          name="loginName"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item<LoginForm>
          name="pwd"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
