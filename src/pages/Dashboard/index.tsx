import React from 'react'
import { Col, Row } from 'antd'
import FastPanel from './FastPanel'
import DataPanel from './DataPanel'
import AreaChart from './AreaChart'

const Dashboard: React.FC = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <FastPanel />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={16}>
        <DataPanel />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <AreaChart />
      </Col>
    </Row>
  )
}

export default Dashboard
