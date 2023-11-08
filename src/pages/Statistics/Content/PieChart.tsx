import { Card } from 'antd'
import React, { useState } from 'react'
import { Pie, PieConfig } from '@ant-design/charts'

const categoryData = [
  '六校联盟创新创业大赛',
  '创新创业在线学习资源',
  '创新创业社团',
  '创新创业典型案例',
  '产教融合企业'
]

const PieChart: React.FC = () => {
  const [data] = useState<any[]>([
    ...categoryData.map((item) => {
      return {
        type: item,
        value: Math.floor(Math.random() * 1000)
      }
    })
  ])

  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}'
    },
    interactions: [
      {
        type: 'element-selected'
      },
      {
        type: 'element-active'
      }
    ]
  }

  return (
    <Card title="截至目前各种分类下资源占比">
      <Pie {...config} style={{ height: 720 }} />
    </Card>
  )
}

export default PieChart
