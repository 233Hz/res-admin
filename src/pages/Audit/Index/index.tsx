import { useRef } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { Button, Space } from 'antd'
import type { ActionType } from '@ant-design/pro-components'
import { resourcesPage } from '@/api/resources'
import type { ResourcesItem } from '@/types/resources'
import columns, { defaultData } from './column'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const AuditIndex: React.FC = () => {
  const actionRef = useRef<ActionType>()
  return (
    <ProTable<ResourcesItem>
      columns={columns}
      actionRef={actionRef}
      defaultData={defaultData}
      scroll={{ x: 'max-content' }}
      cardBordered
      // 开启多选
      rowSelection={{}}
      // 自定义多选 alert
      tableAlertOptionRender={() => {
        return (
          <Space size={16}>
            <Button type='link' key='editable' icon={<CheckOutlined />}>
              批量通过
            </Button>
            <Button type='link' key='down' icon={<CloseOutlined />} danger>
              批量拒绝
            </Button>
            ,
          </Space>
        )
      }}
      request={async (params, sort, filter) => {
        console.log('params, sort, filter', params, sort, filter)
        const { data } = await resourcesPage()
        return {
          success: data.code === 200,
          total: data.data.total,
          data: data.data.list
        }
      }}
      rowKey='id'
      search={{
        labelWidth: 'auto'
      }}
      pagination={{
        pageSize: 10,
        onChange: (page, pageSize) => console.log(page, pageSize)
      }}
      dateFormatter='string'
    />
  )
}

export default AuditIndex
