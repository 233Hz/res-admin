import React from 'react'
import { Card, Statistic } from 'antd'

const gridStyle: React.CSSProperties = {
  width: '25%'
}

const statisticProps = {
  valueStyle: { color: '#009688' }
}

const DataPanel: React.FC = () => {
  return (
    <Card title="数据概览">
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="资源分类" value={5} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="栏目总数" value={47} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="已上传资源" value={129} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="待我审核" value={0} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="特色专题" value={3} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="双创联盟" value={6} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="部门总数" value={8} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Statistic {...statisticProps} title="用户总数" value={11} />
      </Card.Grid>
    </Card>
  )
}

export default DataPanel
