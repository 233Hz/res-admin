import React from 'react'
import { Card } from 'antd'
import {
  AuditOutlined,
  ClusterOutlined,
  FolderOutlined,
  FundOutlined,
  LockOutlined,
  ProfileOutlined,
  SendOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons'

const gridStyle: React.CSSProperties = {
  width: '20%'
}

const iconStyle: React.CSSProperties = {
  fontSize: 24
}

const fastItems = [
  {
    icon: <ClusterOutlined style={iconStyle} />,
    name: '部门'
  },
  {
    icon: <TeamOutlined style={iconStyle} />,
    name: '角色'
  },
  {
    icon: <UserOutlined style={iconStyle} />,
    name: '用户'
  },
  {
    icon: <ProfileOutlined style={iconStyle} />,
    name: '栏目'
  },
  {
    icon: <UploadOutlined style={iconStyle} />,
    name: '上传'
  },
  {
    icon: <FolderOutlined style={iconStyle} />,
    name: '资源'
  },
  {
    icon: <AuditOutlined style={iconStyle} />,
    name: '审核'
  },
  {
    icon: <FundOutlined style={iconStyle} />,
    name: '统计'
  },
  {
    icon: <SendOutlined style={iconStyle} />,
    name: '基本资料'
  },
  {
    icon: <LockOutlined style={iconStyle} />,
    name: '修改密码'
  }
]

const FastPanel: React.FC = () => {
  return (
    <Card title="快捷入口">
      {fastItems.map((item) => (
        <Card.Grid style={gridStyle} key={item.name}>
          <div className="flex flex-col justify-center items-center gap-[16px]">
            {item.icon}
            <p>{item.name}</p>
          </div>
        </Card.Grid>
      ))}
    </Card>
  )
}

export default FastPanel
