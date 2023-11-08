import { Col, Row } from 'antd'
import React from 'react'
import ColumnChart1 from './ColumnChart1'
import ColumnChart2 from './ColumnChart2'

const StatisticsDept: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <ColumnChart1 />
      </Col>
      <Col span={24}>
        <ColumnChart2 />
      </Col>
    </Row>
  )
}

export default StatisticsDept
