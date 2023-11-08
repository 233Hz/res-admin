import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Column, ColumnConfig } from '@ant-design/charts'

const categoryData = [
  '双创合作单位1',
  '上海船厂技工学校',
  '上海科技管理学校',
  '上海市环境学校',
  '上海市第二轻工业学校',
  '上海市贸易学校',
  '上海市医药学校',
  '六校联盟运营管理'
]

const ColumnChart1: React.FC = () => {
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
    <Card title="2023年各部门上传资源个数统计">
      <Column {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default ColumnChart1
