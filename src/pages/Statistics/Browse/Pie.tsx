import { Card } from 'antd'
import React, { useState } from 'react'
import { Pie, PieConfig } from '@ant-design/charts'

const LineChart: React.FC = () => {
  const [data] = useState<any[]>([
    {
      type: '分类一',
      value: 27
    },
    {
      type: '分类二',
      value: 25
    },
    {
      type: '分类三',
      value: 18
    },
    {
      type: '分类四',
      value: 15
    },
    {
      type: '分类五',
      value: 10
    },
    {
      type: '其他',
      value: 5
    }
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
    <Card title='用户访问浏览器分布'>
      <Pie {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart
