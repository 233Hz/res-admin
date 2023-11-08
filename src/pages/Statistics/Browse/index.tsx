import { Col, Row } from 'antd'
import React from 'react'
import LineChart1 from './LineChart1'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import LineChart2 from './LineChart2'

const StatisticsBrowse: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <LineChart1 />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <PieChart />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <AreaChart />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <LineChart2 />
      </Col>
    </Row>
  )
}

export default StatisticsBrowse
