import { Card } from 'antd'
import React, { useState } from 'react'
import { Column, ColumnConfig } from '@ant-design/charts'

const LineChart: React.FC = () => {
  const [data] = useState<any[]>([
    {
      type: '家具家电',
      sales: 38
    },
    {
      type: '粮油副食',
      sales: 52
    },
    {
      type: '生鲜水果',
      sales: 61
    },
    {
      type: '美容洗护',
      sales: 145
    },
    {
      type: '母婴用品',
      sales: 48
    },
    {
      type: '进口食品',
      sales: 38
    },
    {
      type: '食品饮料',
      sales: 38
    },
    {
      type: '家庭清洁',
      sales: 38
    }
  ])

  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  }

  return (
    <Card title="2023年各人员上传资源个数统计">
      <Column {...config} style={{ height: 300 }} />
    </Card>
  )
}

export default LineChart
