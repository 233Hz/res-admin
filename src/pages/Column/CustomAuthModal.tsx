import { Form, Modal, Select } from 'antd'
import { forwardRef, useImperativeHandle, useState } from 'react'

export interface CustomAuthModalRef {
  showModal: () => void
}

export interface CustomAuthModalProps {}

const CustomAuthModal = forwardRef<CustomAuthModalRef, CustomAuthModalProps>((_props, ref) => {
  useImperativeHandle(ref, () => ({
    showModal
  }))

  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal title='设置审核人' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        form={form}
        onFinish={async values => {
          console.log('values', values)
        }}
      >
        <Form.Item name='l1' label='一级审核人' rules={[{ required: true }]}>
          <Select placeholder='请选择一级审核人' allowClear></Select>
        </Form.Item>
        <Form.Item name='l2' label='二级审核人' rules={[{ required: true }]}>
          <Select placeholder='请选择二级审核人' allowClear></Select>
        </Form.Item>
      </Form>
    </Modal>
  )
})

CustomAuthModal.displayName = 'CustomTransferModal'

export default CustomAuthModal
