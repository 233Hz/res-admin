import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Line, LineConfig } from '@ant-design/charts'

const LineChart: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error)
      })
  }

  const config: LineConfig = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5
    },
    smooth: true
  }

  return (
    <Card title='近7天各栏目访问情况'>
      <Line {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart
