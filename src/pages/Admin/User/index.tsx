import { useRef } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { Space } from 'antd'
import type { ActionType } from '@ant-design/pro-components'
import { pageUser } from '@/api/user'
import type { UserItem } from '@/types/user'
import columns, { defaultData } from './column'
import CustomModalForm from './CustomModalForm'

const User: React.FC = () => {
  const actionRef = useRef<ActionType>()
  return (
    <ProTable<UserItem>
      // 列配置
      columns={columns}
      actionRef={actionRef}
      // 默认数据
      defaultData={defaultData}
      scroll={{ x: 'max-content' }}
      cardBordered
      // 开启多选
      rowSelection={{}}
      // 自定义多选 alert
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <a>批量删除</a>
          </Space>
        )
      }}
      request={async (params, sort, filter) => {
        console.log('params, sort, filter', params, sort, filter)
        const { data } = await pageUser()
        return {
          success: data.code === 200,
          total: data.data.total,
          data: data.data.list
        }
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto'
      }}
      pagination={{
        pageSize: 10,
        onChange: (page, pageSize) => console.log(page, pageSize)
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Space wrap key="button-space">
          <CustomModalForm type="add" />
        </Space>
      ]}
    />
  )
}

export default User
