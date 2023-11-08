import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Area, AreaConfig } from '@ant-design/charts'

const LineChart: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    const newData = Array.from({ length: 24 }).map((_, index) => {
      return {
        time: index < 10 ? `0${index}:00` : `${index}:00`,
        value: Math.floor(Math.random() * 1000)
      }
    })
    setData(newData)
  }

  const config: AreaConfig = {
    data,
    padding: 'auto',
    xField: 'time',
    yField: 'value',
    xAxis: {
      range: [0, 1]
    },
    smooth: true,
    label: {
      position: 'top',
      formatter: (data) => `${data.value}次`,
      style: {
        fill: '#009688',
        opacity: 0.6
      }
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 1:#009688'
      }
    }
  }

  return (
    <Card title="今日流量趋势统计">
      <Area {...config} style={{ height: 400 }} />
    </Card>
  )
}

export default LineChart
