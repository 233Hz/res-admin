import { useRef } from 'react'
import { ProTable } from '@ant-design/pro-components'
import { Button, Space } from 'antd'
import type { ActionType } from '@ant-design/pro-components'
import { pageRole } from '@/api/role'
import type { RoleItem } from '@/types/role'
import getColumns, { defaultData } from './column'
import CustomTreeModal, { CustomTreeModalRef } from './CustomTreeModal'
import { useTestGetQuery, useTestPostMutation } from '@/store/modules/test'

const Auth: React.FC = () => {
  const actionRef = useRef<ActionType>()
  const transferModalRef = useRef<CustomTreeModalRef>(null)

  const res1 = useTestGetQuery()
  console.log('RES============>', res1)

  const [testPost, res] = useTestPostMutation()
  console.log(res)

  return (
    <>
      <Button onClick={() => res1.refetch()}>TEST</Button>
      <Button onClick={() => testPost()}>TEST2</Button>
      <ProTable<RoleItem>
        columns={getColumns(transferModalRef)}
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
          const { data } = await pageRole()
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
      <CustomTreeModal ref={transferModalRef} />
    </>
  )
}

export default Auth
