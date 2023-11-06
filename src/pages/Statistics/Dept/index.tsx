import { Col, Row } from 'antd'
import React from 'react'
import Column1 from './Column1'
import Column2 from './Column2'

const StatisticsDept: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Column1 />
      </Col>
      <Col span={24}>
        <Column2 />
      </Col>
    </Row>
  )
}

export default StatisticsDept
