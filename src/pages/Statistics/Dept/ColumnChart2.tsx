import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Column, ColumnConfig } from '@ant-design/charts'

const categoryData = [
  '学生测试',
  '双创合作',
  '汪灏',
  '汪灏',
  '施鑫慧',
  '苏俊',
  '徐佳妍',
  '陈伟东',
  '吴岚',
  '龚辉'
]

const ColumnChart2: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    const data: any[] = []
    Array.from({ length: 12 }).map((_, index) => {
      categoryData.forEach((item) => {
        data.push({
          month: `${index + 1}月`,
          value: Math.floor(Math.random() * 1000) + 200,
          type: item
        })
      })
    })
    setData(data)
  }

  const config: ColumnConfig = {
    data,
    color: ['#d87a80', '#ffcb8c', '#5fb878', '#00a595', '#1e9fff'],
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position'
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap'
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color'
        }
      ]
    }
  }

  return (
    <Card title="2023年各人员上传资源个数统计">
      <Column {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default ColumnChart2
