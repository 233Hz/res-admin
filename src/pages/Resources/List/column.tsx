import { Button } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { ResourcesItem } from '@/types/resources'
import {
  DeleteOutlined,
  EditOutlined,
  FundViewOutlined,
  RollbackOutlined
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
    title: '资源权限',
    dataIndex: 'auth',
    align: 'center',
    search: false,
    valueEnum: {
      1: {
        text: '公开',
        status: 'Success'
      },
      2: {
        text: '私有',
        status: 'Error'
      }
    }
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
    title: '上传人',
    dataIndex: 'createUser',
    align: 'center',
    search: false
  },
  {
    dataIndex: 'status',
    valueType: 'radioButton',
    initialValue: '1',
    hideInTable: true,
    valueEnum: {
      1: {
        text: '全部'
      },
      2: {
        text: '待审核'
      },
      3: {
        text: '审核中'
      },
      4: {
        text: '已下架'
      },
      5: {
        text: '未通过'
      },
      6: {
        text: '已发布'
      }
    }
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
        <Button type="link" key="editable" icon={<EditOutlined />}>
          编辑
        </Button>,
        <Button type="link" key="down" icon={<RollbackOutlined />}>
          下架
        </Button>,
        <Button type="link" key="deletable" icon={<DeleteOutlined />} danger>
          删除
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
