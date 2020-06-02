import React from 'react'
import { Row, Col } from 'antd'

import Header from './Header'
import SearchBar from './SearchBar'
import Results from './Results'

const Layout = props => (
  <Row>
    <Col span={8}>
      <Header/>
      <SearchBar/>
      <Results/>
    </Col>
    <Col span={16}>
      {props.children}
    </Col>
  </Row>
)

export default Layout