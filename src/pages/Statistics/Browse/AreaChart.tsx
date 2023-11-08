import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Area, AreaConfig } from '@ant-design/charts'

const xData = ['11-02', '11-03', '11-04', '11-05', '11-06', '11-07', '11-08']
const categoryData = [
  '六校联盟创新创业大赛',
  '创新创业在线学习资源',
  '创新创业社团',
  '创新创业典型案例',
  '产教融合企业'
]

const AreaChart: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    const data: any[] = []
    xData.map((x) => {
      categoryData.forEach((item) => {
        data.push({
          day: x,
          value: Math.floor(Math.random() * 1000) + 200,
          type: item
        })
      })
    })
    setData(data)
  }

  const config: AreaConfig = {
    data,
    xField: 'day',
    yField: 'value',
    seriesField: 'type',
    xAxis: {
      range: [0, 1]
    }
  }

  return (
    <Card title="近7天各栏目访问情况">
      <Area {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default AreaChart
