import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { Area, AreaConfig } from '@ant-design/charts'

const LineChart: React.FC = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error)
      })
  }

  const config: AreaConfig = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country'
  }

  return (
    <Card title='近7天各栏目访问情况'>
      <Area {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart
