import { FundViewOutlined } from '@ant-design/icons'
import { Button, Progress, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface FileType {
  name: string
  size: string
  progress: number
  status: string
}

const columns: ColumnsType<FileType> = [
  {
    title: '资源名称',
    dataIndex: 'name',
    key: 'name',
    align: 'center'
  },
  {
    title: '资源大小',
    dataIndex: 'size',
    key: 'size',
    align: 'center'
  },
  {
    title: '上传进度',
    dataIndex: 'progress',
    key: 'progress',
    width: 160,
    align: 'center',
    render: (progress: number) => {
      return <Progress percent={progress} size="small" />
    }
  },
  {
    title: '上传状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center'
  },
  {
    title: '操作',
    key: 'option',
    align: 'center',
    render: () => (
      <Space size="middle">
        <Button type="link" icon={<FundViewOutlined />}>
          预览
        </Button>
      </Space>
    )
  }
]

export const defaultData = [
  {
    key: '1',
    name: 'xxx.png',
    size: '32 KB',
    progress: 0,
    status: '未完成'
  },
  {
    key: '2',
    name: 'yyy.png',
    size: '42 KB',
    progress: 100,
    status: '已完成'
  }
]

export default columns
