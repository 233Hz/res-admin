import { Card } from 'antd'
import React, { useState } from 'react'
import { Pie, PieConfig } from '@ant-design/charts'

const categoryData = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE', '其他']

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
    <Card title="用户访问浏览器分布">
      <Pie {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default PieChart
