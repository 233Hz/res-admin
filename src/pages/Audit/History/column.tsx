import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { ResourcesItem } from '@/types/resources'
import {
  CheckOutlined,
  CloseOutlined,
  FileSearchOutlined,
  FundViewOutlined
} from '@ant-design/icons'

const columns: ProColumns<ResourcesItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    align: 'center',
    width: 48
  },
  {
    title: '资源名称',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '资源大小',
    dataIndex: 'size',
    align: 'center',
    search: false
  },
  {
    title: '学生权限',
    dataIndex: 'download',
    align: 'center',
    search: false,
    valueEnum: {
      1: {
        text: '允许',
        status: 'Success'
      },
      2: {
        text: '禁止',
        status: 'Error'
      }
    }
  },
  {
    title: '所属栏目',
    dataIndex: 'columnId',
    align: 'center',
    search: false
  },
  {
    title: '资源分类',
    dataIndex: 'categoryId',
    align: 'center',
    search: false
  },
  {
    title: '内容状态',
    dataIndex: 'state',
    align: 'center',
    search: false,
    valueEnum: {
      1: {
        text: '已发布',
        status: 'Success'
      },
      2: {
        text: '已下架',
        status: 'Error'
      }
    }
  },
  {
    title: '提交用户',
    dataIndex: 'createUser',
    align: 'center',
    search: false
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    align: 'center',
    width: 1,
    render: (text, record, _, action) => {
      console.log(text, record, _, action)
      return [
        <Button type="link" key="auditRecord" icon={<FileSearchOutlined />}>
          审核记录
        </Button>,
        <Button type="link" key="editable" icon={<CheckOutlined />}>
          通过
        </Button>,
        <Button type="link" key="down" icon={<CloseOutlined />} danger>
          拒绝
        </Button>,
        <Button type="link" key="preview" icon={<FundViewOutlined />}>
          预览
        </Button>
      ]
    }
  }
]

export const defaultData: ResourcesItem[] = [
  {
    id: 1,
    name: '测试',
    size: 100,
    auth: 1,
    download: 1,
    columnId: '泼猴信息技术（上海）有限公司',
    categoryId: 'PDF',
    state: 1,
    createUser: '李四',
    createTime: '2021-01-01 12:12:12'
  },
  {
    id: 2,
    name: '测试2',
    size: 100,
    auth: 2,
    download: 2,
    columnId: '白族刺绣',
    categoryId: 'MP4',
    state: 2,
    createUser: '李四',
    createTime: '2021-01-01 12:12:12'
  }
]

export default columns
