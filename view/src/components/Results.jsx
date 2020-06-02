import React from 'react'
import { Card, Typography } from 'antd'

const { Title } = Typography

const Results = props => {
  return (
    <React.Fragment>
      <Title level={2}>4 Results</Title>
      <Card>
        <h3>Digital Ocean</h3>
        <h4>Sr. Back-end Developer</h4>
        <h5>San Francisco</h5>
      </Card>
      <Card>
        <h3>Digital Ocean</h3>
        <h4>Sr. Back-end Developer</h4>
        <h5>San Francisco</h5>
      </Card>
    </React.Fragment>
  )
}

export default Results