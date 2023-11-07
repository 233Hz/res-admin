import Login from '../pages/Login'
import Layout from '../layout'
import Dashboard from '../pages/Dashboard'
import Dept from '../pages/Admin/Dept'
import Role from '../pages/Admin/Role'
import Auth from '../pages/Admin/Auth'
import User from '../pages/Admin/User'
import ColumnList from '../pages/Column'
import ResourcesList from '../pages/Resources/List'
import ResourcesUpload from '../pages/Resources/Upload'
import ResourcesBatchUpload from '../pages/Resources/BatchUpload'
import AuditIndex from '../pages/Audit/Index'
import AuditHistory from '../pages/Audit/History'
import StatisticsContent from '../pages/Statistics/Content'
import StatisticsDept from '../pages/Statistics/Dept'
import StatisticsBrowse from '../pages/Statistics/Browse'
import StatisticsRegion from '../pages/Statistics/Region'
import SettingWebsite from '../pages/Setting/Website'
import SettingCategory from '../pages/Setting/Category'
import SettingSpecial from '../pages/Setting/Special'
import SettingAlliance from '../pages/Setting/Alliance'
import SettingNotify from '../pages/Setting/Notify'
import My from '../pages/My'
import { Navigate, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Navigate to='/index' />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/index',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/admin',
    element: <Navigate to='/admin/dept' />
  },
  {
    path: '/admin',
    element: <Layout />,
    children: [
      {
        path: '/admin/dept',
        element: <Dept />
      },
      {
        path: '/admin/role',
        element: <Role />
      },
      {
        path: '/admin/auth',
        element: <Auth />
      },
      {
        path: '/admin/User',
        element: <User />
      }
    ]
  },
  {
    path: '/column',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ColumnList />
      }
    ]
  },
  {
    path: '/resources',
    element: <Navigate to='/resources/list' />
  },
  {
    path: '/resources',
    element: <Layout />,
    children: [
      {
        path: '/resources/list',
        element: <ResourcesList />
      },
      {
        path: '/resources/upload',
        element: <ResourcesUpload />
      },
      {
        path: '/resources/batch_upload',
        element: <ResourcesBatchUpload />
      }
    ]
  },
  {
    path: '/audit',
    element: <Navigate to='/audit/index' />
  },
  {
    path: '/audit',
    element: <Layout />,
    children: [
      {
        path: '/audit/index',
        element: <AuditIndex />
      },
      {
        path: '/audit/history',
        element: <AuditHistory />
      }
    ]
  },
  {
    path: '/statistics',
    element: <Navigate to='/statistics/content' />
  },
  {
    path: '/statistics',
    element: <Layout />,
    children: [
      {
        path: '/statistics/content',
        element: <StatisticsContent />
      },
      {
        path: '/statistics/dept',
        element: <StatisticsDept />
      },
      {
        path: '/statistics/browse',
        element: <StatisticsBrowse />
      },
      {
        path: '/statistics/region',
        element: <StatisticsRegion />
      }
    ]
  },
  {
    path: '/setting',
    element: <Navigate to='/setting/website' />
  },
  {
    path: '/setting',
    element: <Layout />,
    children: [
      {
        path: '/setting/website',
        element: <SettingWebsite />
      },
      {
        path: '/setting/category',
        element: <SettingCategory />
      },
      {
        path: '/setting/special',
        element: <SettingSpecial />
      },
      {
        path: '/setting/alliance',
        element: <SettingAlliance />
      },
      {
        path: '/setting/notify',
        element: <SettingNotify />
      }
    ]
  },
  {
    path: '/my',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <My />
      }
    ]
  }
]

export default routes
