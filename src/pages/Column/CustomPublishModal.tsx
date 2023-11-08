import { Modal } from 'antd'
import { TransferDirection } from 'antd/es/transfer'
import { Transfer } from 'antd/lib'
import { forwardRef, useImperativeHandle, useState } from 'react'

export interface CustomPublishModalRef {
  showModal: () => void
}

export interface CustomPublishModalProps {}

interface RecordType {
  key: string
  title: string
  description: string
}

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`
}))

const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 10)
  .map((item) => item.key)

const CustomPublishModal = forwardRef<
  CustomPublishModalRef,
  CustomPublishModalProps
>((_props, ref) => {
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

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log('targetKeys:', nextTargetKeys)
    console.log('direction:', direction)
    console.log('moveKeys:', moveKeys)
    setTargetKeys(nextTargetKeys)
  }

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys)
    console.log('targetSelectedKeys:', targetSelectedKeys)
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys])
  }

  const onScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<HTMLUListElement>
  ) => {
    console.log('direction:', direction)
    console.log('target:', e.target)
  }

  return (
    <Modal
      title="分配权限"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="flex">
        <Transfer
          className="mx-auto"
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={onChange}
          onSelectChange={onSelectChange}
          onScroll={onScroll}
          render={(item) => item.title}
        />
      </div>
    </Modal>
  )
})

CustomPublishModal.displayName = 'CustomTransferModal'

export default CustomPublishModal
