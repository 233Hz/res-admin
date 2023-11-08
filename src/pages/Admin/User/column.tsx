import { Button, Tag } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import { pageRole } from '@/api/role'
import type { UserItem } from '@/types/user'
import { DeleteOutlined } from '@ant-design/icons'
import CustomModalForm from './CustomModalForm'
import { pageDept } from '@/api/dept'

const columns: ProColumns<UserItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
    align: 'center'
  },
  {
    title: '登录账号',
    dataIndex: 'loginName',
    search: false,
    align: 'center'
  },
  {
    title: '用户姓名',
    dataIndex: 'username',
    align: 'center'
  },
  {
    title: '用户性别',
    dataIndex: 'gender',
    align: 'center',
    valueType: 'select',
    valueEnum: {
      1: {
        text: '男'
      },
      2: {
        text: '女'
      }
    }
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
    align: 'center',
    search: false
  },
  {
    title: '电子邮箱',
    dataIndex: 'email',
    align: 'center',
    search: false
  },
  {
    title: '所在部门',
    dataIndex: 'deptId',
    align: 'center',
    search: false,
    valueType: 'select',
    request: async () => {
      const { data } = await pageDept()
      return data.data.list.map((item) => {
        return {
          label: item.deptName,
          value: item.id
        }
      })
    }
  },
  {
    title: '用户角色',
    dataIndex: 'role',
    align: 'center',
    search: false,
    valueType: 'select',
    request: async () => {
      const { data } = await pageRole()
      return data.data.list.map((item) => {
        return {
          label: item.roleName,
          value: item.id
        }
      })
    }
  },
  {
    title: '有效期',
    dataIndex: 'validPeriod',
    align: 'center',
    search: false,
    sorter: true,
    render: (_, record) => {
      if (record.validPeriod === 1) {
        return <Tag color="#87d068">永久</Tag>
      } else if (record.validPeriod === 0) {
        return <Tag color="#cd201f">禁用</Tag>
      } else {
        return <Tag color="#f50">{record.validPeriod}</Tag>
      }
    }
  },
  {
    title: '添加时间',
    dataIndex: 'createTime',
    align: 'center',
    search: false,
    sorter: true
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    align: 'center',
    width: 1,
    render: (text, record, _, action) => {
      return [
        <CustomModalForm type="update" key="editable" form={record} />,
        <Button
          type="link"
          key="deletable"
          icon={<DeleteOutlined />}
          onClick={() => console.log(text, record, _, action)}
          danger
        >
          删除
        </Button>
      ]
    }
  }
]

export const defaultData: UserItem[] = [
  {
    id: 1,
    loginName: 'TEST',
    username: '测试',
    gender: 1,
    phone: '13800138000',
    email: 'test@test.com',
    deptId: 1,
    role: 1,
    validPeriod: 1,
    idCard: '123456789012345678',
    createTime: '2021-01-01 00:00:00'
  }
]

export default columns
