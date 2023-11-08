import React from 'react'
import { Tabs, TabsProps } from 'antd'
import MyBasicInfo from './BasicInfo'
import MySetPassword from './SetPassword'

const tabItems: TabsProps['items'] = [
  {
    key: 'basic-info',
    label: '基本信息',
    children: <MyBasicInfo />
  },
  {
    key: 'set-password',
    label: '修改密码',
    children: <MySetPassword />
  }
]

const My: React.FC = () => {
  return <Tabs defaultActiveKey="1" tabPosition="left" items={tabItems} />
}

export default My
