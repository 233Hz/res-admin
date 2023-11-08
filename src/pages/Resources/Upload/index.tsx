import React, { useRef } from 'react'
import {
  ProForm,
  ProFormDependency,
  ProFormField,
  ProFormInstance,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
  ProFormUploadDragger
} from '@ant-design/pro-components'
import type { ResourcesItem } from '@/types/resources'
import { queryCategoryLevel } from '@/api/category'
import CustomEditor from '@/components/CustomEditor'

export interface Props {}

const ResourcesUpload: React.FC<Props> = () => {
  const formRef = useRef<ProFormInstance>()
  return (
    <div className="flex">
      <ProForm<ResourcesItem>
        formRef={formRef}
        className="w-[1000px] mx-auto"
        grid
        rowProps={{ gutter: 16 }}
        onFinish={async (values) => {
          console.log('values', values)
        }}
      >
        <ProForm.Group>
          <ProFormText
            colProps={{ sm: 24, md: 12 }}
            name="name"
            label="资源名称"
            placeholder="请输入资源名称"
            rules={[{ required: true }]}
          />
          <ProFormSelect
            colProps={{ sm: 24, md: 12 }}
            name="categoryId"
            label="资源分类"
            placeholder="请选择资源分类"
            rules={[{ required: false }]}
          />
          <ProFormRadio.Group
            colProps={{ sm: 24, md: 12 }}
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
          <ProFormRadio.Group
            colProps={{ sm: 24, md: 12 }}
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
          <ProFormSelect
            colProps={{ sm: 24, md: 8 }}
            name="columnL1Id"
            label="一级栏目"
            placeholder="请选择一级栏目"
            rules={[{ required: true }]}
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
                  colProps={{ sm: 24, md: 8 }}
                  name="columnL2Id"
                  label="二级栏目"
                  params={{ id: columnL1Id }}
                  initialValue={void 0}
                  placeholder="请选择二级栏目"
                  rules={[{ required: true }]}
                  request={async (params) => {
                    const { data } = await queryCategoryLevel(
                      params.id as number
                    )
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
                  colProps={{ sm: 24, md: 8 }}
                  name="columnL3Id"
                  label="三级栏目"
                  params={{ id: columnL2Id }}
                  initialValue={void 0}
                  placeholder="请选择三级栏目"
                  rules={[{ required: true }]}
                  request={async (params) => {
                    const { data } = await queryCategoryLevel(
                      params.id as number
                    )
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
          <ProFormUploadButton
            colProps={{ sm: 24, md: 12 }}
            name="cover"
            label="封面上传"
            max={1}
          />
          <ProFormUploadDragger
            colProps={{ sm: 24, md: 12 }}
            name="file"
            label="文件上传"
            rules={[{ required: false, message: '请上传文件' }]}
            description=""
            max={1}
          />
        </ProForm.Group>
        <ProFormField name="content" colProps={{ span: 24 }}>
          <CustomEditor />
        </ProFormField>
      </ProForm>
    </div>
  )
}

export default ResourcesUpload
