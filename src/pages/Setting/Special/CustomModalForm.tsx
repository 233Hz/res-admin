import React, { useRef } from 'react'
import { Button, message } from 'antd'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import {
  ModalForm,
  ProForm,
  ProFormDependency,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProFormUploadDragger
} from '@ant-design/pro-components'
import type { CustomModalType } from '@/types/global'
import { queryCategoryLevel } from '@/api/category'
import { SpecialItem } from '@/types/special'

export interface Props {
  form?: Partial<SpecialItem>
  type: CustomModalType
}

const triggerType = (type: CustomModalType) => {
  if (type === 'add') {
    return (
      <Button type='primary' icon={<PlusOutlined />}>
        添加
      </Button>
    )
  } else if (type === 'update') {
    return (
      <Button type='link' icon={<EditOutlined />}>
        编辑
      </Button>
    )
  }
}

const CustomModalForm: React.FC<Props> = props => {
  const formRef = useRef<ProFormInstance>()
  return (
    <ModalForm<SpecialItem>
      trigger={triggerType(props.type)}
      grid
      onFinish={async values => {
        console.log(values)
        message.success('提交成功')
      }}
      initialValues={{ ...props.form }}
    >
      <ProFormText
        name='title'
        label='特色专题标题'
        placeholder='请输入部门名称'
        rules={[{ required: true }]}
      />
      <ProForm.Group>
        <ProFormSelect
          colProps={{ sm: 24, md: 8 }}
          name='columnL1Id'
          label='一级栏目'
          placeholder='请选择一级栏目'
          rules={[{ required: true }]}
          request={async () => {
            const { data } = await queryCategoryLevel()
            return data.data.map(item => {
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
                name='columnL2Id'
                label='二级栏目'
                params={{ id: columnL1Id }}
                initialValue={void 0}
                placeholder='请选择二级栏目'
                rules={[{ required: true }]}
                request={async params => {
                  const { data } = await queryCategoryLevel(params.id as number)
                  return data.data.map(item => {
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
                name='columnL3Id'
                label='三级栏目'
                params={{ id: columnL2Id }}
                initialValue={void 0}
                placeholder='请选择三级栏目'
                request={async params => {
                  const { data } = await queryCategoryLevel(params.id as number)
                  return data.data.map(item => {
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
      </ProForm.Group>
      <ProFormUploadDragger
        name='file'
        label='上传图片'
        rules={[{ required: true, message: '请上传图片' }]}
        description=''
        max={1}
      />
    </ModalForm>
  )
}

export default CustomModalForm
