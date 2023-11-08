import { useRef } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { Col, Row, Space } from 'antd'
import type { ActionType } from '@ant-design/pro-components'
import { pageColumn } from '@/api/column'
import type { ColumnItem } from '@/types/column'
import getColumns, { defaultData } from './column'
import CustomModalForm from './CustomModalForm'
import CustomTree from './CustomTree'
import CustomPublishModal, { CustomPublishModalRef } from './CustomPublishModal'
import CustomAuthModal, { CustomAuthModalRef } from './CustomAuthModal'

const ColumnList: React.FC = () => {
  const actionRef = useRef<ActionType>()
  const publishModalRef = useRef<CustomPublishModalRef>(null)
  const authModalRef = useRef<CustomAuthModalRef>(null)
  return (
    <>
      <Row gutter={16}>
        <Col sm={24} md={6}>
          <CustomTree />
        </Col>
        <Col sm={24} md={18}>
          <ProTable<ColumnItem>
            columns={getColumns(publishModalRef, authModalRef)}
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
                  <a>批量删除</a>
                </Space>
              )
            }}
            request={async (params, sort, filter) => {
              console.log('params, sort, filter', params, sort, filter)
              const { data } = await pageColumn()
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
        </Col>
      </Row>
      <CustomPublishModal ref={publishModalRef} />
      <CustomAuthModal ref={authModalRef} />
    </>
  )
}

export default ColumnList
