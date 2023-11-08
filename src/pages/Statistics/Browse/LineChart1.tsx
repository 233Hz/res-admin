import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Line, LineConfig } from '@ant-design/charts'

const categoryData = ['访问次数', '访问用户']

const LineChart1: React.FC = () => {
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

  const config: LineConfig = {
    data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    smooth: true
  }

  return (
    <Card title="2023年各月份访问用户数与访问次数对比">
      <Line {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart1
