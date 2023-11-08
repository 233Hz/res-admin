import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Line, LineConfig } from '@ant-design/charts'

const xData = ['11-02', '11-03', '11-04', '11-05', '11-06', '11-07', '11-08']
const categoryData = ['访问次数', '访问用户']

const LineChart2: React.FC = () => {
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

  const config: LineConfig = {
    data,
    padding: 'auto',
    xField: 'day',
    yField: 'value',
    seriesField: 'type',
    smooth: true
  }

  return (
    <Card title="近7天访问用户数与访问次数对比">
      <Line {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart2
