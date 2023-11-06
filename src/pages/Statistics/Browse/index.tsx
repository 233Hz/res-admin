import { Col, Row } from 'antd'
import React from 'react'
import Line1 from './Line1'
import Pie from './Pie'
import Area from './Area'
import Line2 from './Line2'

const StatisticsBrowse: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Line1 />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Pie />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Area />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Line2 />
      </Col>
    </Row>
  )
}

export default StatisticsBrowse
