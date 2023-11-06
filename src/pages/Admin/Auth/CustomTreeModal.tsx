import { Modal, Tree } from 'antd'
import { DataNode } from 'antd/es/tree'
import { forwardRef, useImperativeHandle, useState } from 'react'

export interface CustomTreeModalRef {
  showModal: () => void
}

export interface CustomTreeModalProps {}

const treeData: DataNode[] = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' }
        ]
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' }
        ]
      },
      {
        title: '0-0-2',
        key: '0-0-2'
      }
    ]
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' }
    ]
  },
  {
    title: '0-2',
    key: '0-2'
  }
]

const CustomTreeModal = forwardRef<CustomTreeModalRef, CustomTreeModalProps>((_props, ref) => {
  useImperativeHandle(ref, () => ({
    showModal
  }))

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
    <Modal title='分配权限' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Tree
        checkable
        showLine={{ showLeafIcon: true }}
        defaultExpandedKeys={['0-0-0']}
        treeData={treeData}
      />
    </Modal>
  )
})

CustomTreeModal.displayName = 'CustomTransferModal'

export default CustomTreeModal
