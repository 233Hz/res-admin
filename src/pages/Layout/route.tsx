import {
  AuditOutlined,
  BarsOutlined,
  ChromeFilled,
  DashboardOutlined,
  FolderOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

const route = {
  path: '/',
  routes: [
    {
      path: '/index',
      name: '首页',
      icon: <DashboardOutlined />
    },
    {
      path: '/admin',
      name: '用户角色',
      icon: <TeamOutlined />,
      routes: [
        {
          path: '/admin/dept',
          name: '部门管理'
        },
        {
          path: '/admin/role',
          name: '角色管理'
        },
        {
          path: '/admin/auth',
          name: '角色权限'
        },
        {
          path: '/admin/user',
          name: '用户管理'
        }
      ]
    },
    {
      path: '/column',
      name: '栏目管理',
      icon: <BarsOutlined />
    },
    {
      path: '/resources',
      name: '资源管理',
      icon: <FolderOutlined />,
      routes: [
        {
          path: '/resources/list',
          name: '资源列表'
        },
        {
          path: '/resources/upload',
          name: '资源上传'
        },
        {
          path: '/resources/batch_upload',
          name: '批量上传'
        }
      ]
    },
    {
      path: '/audit',
      name: '审核中心',
      icon: <AuditOutlined />,
      routes: [
        {
          path: '/audit/index',
          name: '待我审核'
        },
        {
          path: '/audit/history',
          name: '审核历史'
        }
      ]
    },
    {
      path: '/statistics',
      name: '统计中心',
      icon: <FundProjectionScreenOutlined />,
      routes: [
        {
          path: '/statistics/content',
          name: '内容发布统计'
        },
        {
          path: '/statistics/dept',
          name: '部门发布统计'
        },
        {
          path: '/statistics/browse',
          name: '用户浏览统计'
        },
        {
          path: '/statistics/region',
          name: '用户地域统计'
        }
      ]
    },
    {
      path: '/setting',
      name: '系统设置',
      icon: <SettingOutlined />,
      routes: [
        {
          path: '/setting/website',
          name: '网站设置'
        },
        {
          path: '/setting/category',
          name: '资源分类'
        },
        {
          path: '/setting/special',
          name: '特色专题'
        },
        {
          path: '/setting/alliance',
          name: '双创联盟'
        },
        {
          path: '/setting/notify',
          name: '通知公告'
        }
      ]
    },
    {
      path: '/my',
      name: '个人中心',
      icon: <UserOutlined />
    },
    {
      path: 'https://ant.design',
      name: 'Ant Design 官网外链',
      icon: <ChromeFilled />
    }
  ]
}

export default route
