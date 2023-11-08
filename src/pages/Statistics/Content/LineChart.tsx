import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Line, LineConfig } from '@ant-design/charts'

const LineChart: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    const data = Array.from({ length: 12 }).map((_, index) => {
      return {
        month: `${index + 1}月`,
        value: Math.floor(Math.random() * 1000) + 200
      }
    })
    setData(data)
  }

  const config: LineConfig = {
    data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    smooth: true,
    label: {
      position: 'top',
      formatter: (data) => `${data.value}个`,
      style: {
        fill: '#009688',
        opacity: 0.6
      }
    }
  }

  return (
    <Card title="2023年各月份上传资源总个数对比">
      <Line {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart
