import { Col, Row } from 'antd'
import React from 'react'
import LineChart from './LineChart'
import ColumnChart from './ColumnChart'
import PieChart from './PieChart'

const StatisticsContent: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <LineChart />
          </Col>
          <Col span={24}>
            <ColumnChart />
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <PieChart />
      </Col>
    </Row>
  )
}

export default StatisticsContent
