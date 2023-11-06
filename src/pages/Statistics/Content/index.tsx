import { Col, Row } from 'antd'
import React from 'react'
import Line from './Line'
import Column from './Column'
import Pie from './Pie'

const StatisticsContent: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Line />
          </Col>
          <Col span={24}>
            <Column />
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Pie />
      </Col>
    </Row>
  )
}

export default StatisticsContent
