import React, { useRef } from 'react'
import { ProForm, ProFormInstance, ProFormText } from '@ant-design/pro-components'
import type { ResourcesItem } from '@/types/resources'

export interface Props {}

const SettingWebsite: React.FC<Props> = () => {
  const formRef = useRef<ProFormInstance>()
  return (
    <ProForm<ResourcesItem>
      style={{ width: 600 }}
      formRef={formRef}
      layout='horizontal'
      labelCol={{ span: 4 }}
      rowProps={{ gutter: 16 }}
      onFinish={async values => {
        console.log('values', values)
      }}
    >
      <ProFormText name='name' label='网站名称' placeholder='请输入网站名称' />
      <ProFormText name='url' label='网站名称' placeholder='请输入网站名称' />
      <ProFormText name='title' label='网站名称' placeholder='请输入网站名称' />
      <ProFormText name='keyword' label='META关键词' placeholder='请输入META关键词' />
      <ProFormText name='description' label='META描述' placeholder='请输入META描述' />
      <ProFormText name='copyright' label='版权所有' placeholder='请输入版权所有' />
    </ProForm>
  )
}

export default SettingWebsite
