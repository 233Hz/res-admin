import { queryCategoryLevel } from '@/api/category'
import {
  ProFormDependency,
  ProFormInstance,
  ProFormSelect,
  ProFormUploadDragger,
  StepsForm
} from '@ant-design/pro-components'
import { Table, message } from 'antd'
import React, { useRef } from 'react'
import columns, { defaultData as fileDefaultData } from './fileColumn'

const ResourcesBatchUpload: React.FC = () => {
  const formRef = useRef<ProFormInstance>()
  return (
    <StepsForm
      formRef={formRef}
      onFinish={async () => {
        message.success('提交成功')
      }}
    >
      <StepsForm.StepForm<{
        name: string
      }>
        title="选择资源属性"
        onFinish={async () => {
          console.log(formRef.current?.getFieldsValue())
          return true
        }}
      >
        <ProFormSelect
          name="columnL1Id"
          label="一级栏目"
          placeholder="请选择一级栏目"
          request={async () => {
            const { data } = await queryCategoryLevel()
            return data.data.map((item) => {
              return {
                label: item.name,
                value: item.id
              }
            })
          }}
          onChange={() => {
            formRef.current?.setFieldsValue({ columnL2Id: void 0 })
          }}
        />

        <ProFormDependency name={['columnL1Id']}>
          {({ columnL1Id }) => {
            return (
              <ProFormSelect
                name="columnL2Id"
                label="二级栏目"
                params={{ id: columnL1Id }}
                initialValue={void 0}
                placeholder="请选择二级栏目"
                request={async (params) => {
                  const { data } = await queryCategoryLevel(params.id as number)
                  return data.data.map((item) => {
                    return {
                      label: item.name,
                      value: item.id
                    }
                  })
                }}
                onChange={() => {
                  formRef.current?.setFieldsValue({ columnL3Id: void 0 })
                }}
              />
            )
          }}
        </ProFormDependency>
        <ProFormDependency name={['columnL2Id']}>
          {({ columnL2Id }) => {
            return (
              <ProFormSelect
                name="columnL3Id"
                label="三级栏目"
                params={{ id: columnL2Id }}
                initialValue={void 0}
                request={async (params) => {
                  const { data } = await queryCategoryLevel(params.id as number)
                  return data.data.map((item) => {
                    return {
                      label: item.name,
                      value: item.id
                    }
                  })
                }}
              />
            )
          }}
        </ProFormDependency>
        <ProFormSelect
          name="categoryId"
          label="资源分类"
          initialValue="aaa"
          placeholder="请选择资源分类"
          rules={[{ required: true }]}
        />
        <ProFormSelect
          name="auth"
          label="资源权限"
          options={[
            {
              label: '共有',
              value: 1
            },
            {
              label: '私有',
              value: 2
            }
          ]}
          initialValue={1}
          rules={[{ required: true }]}
        />
        <ProFormSelect
          name="download"
          label="允许下载"
          options={[
            {
              label: '允许',
              value: 1
            },
            {
              label: '禁止',
              value: 2
            }
          ]}
          initialValue={1}
          rules={[{ required: true }]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm<{
        name: string
      }>
        title="上传资源"
        onFinish={async () => {
          console.log(formRef.current?.getFieldsValue())
          return true
        }}
      >
        {' '}
        <ProFormUploadDragger
          name="file"
          label="文件上传"
          rules={[{ required: true, message: '请上传文件' }]}
        />
        <Table
          columns={columns}
          dataSource={fileDefaultData}
          pagination={false}
          bordered
          className="mb-[20px]"
        />
      </StepsForm.StepForm>
    </StepsForm>
  )
}

export default ResourcesBatchUpload
