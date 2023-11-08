import {
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  QuestionCircleFilled
} from '@ant-design/icons'
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout
} from '@ant-design/pro-components'
import { ConfigProvider, Dropdown } from 'antd'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { isExternalLink } from '@/utils/verify'
import route from './route'

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div
      id="layout"
      style={{
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('layout') || document.body
          }}
        >
          <ProLayout
            route={route}
            // 当前激活的路由
            location={{
              pathname: location.pathname
            }}
            title="创新创业平台管理"
            logo={logo}
            fixSiderbar
            layout="side"
            navTheme="light"
            contentWidth="Fluid"
            colorPrimary="#1677FF"
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)'
              }
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '张三',
              render: (_props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录'
                        }
                      ]
                    }}
                  >
                    {dom}
                  </Dropdown>
                )
              }
            }}
            actionsRender={(_props) => {
              if (_props.isMobile) return []
              if (typeof window === 'undefined') return []
              return [
                <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" />
              ]
            }}
            menuFooterRender={(_props) => {
              if (_props?.collapsed) return undefined
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12
                  }}
                >
                  <div>© 2023 泼猴信息 版权所有</div>
                </div>
              )
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() =>
                  (item.path && isExternalLink(item.path)) ||
                  navigate(item.path || '/index')
                }
              >
                {dom}
              </div>
            )}
          >
            <PageContainer>
              <ProCard className="overflow-auto">
                <Outlet />
              </ProCard>
            </PageContainer>
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  )
}

export default Layout
