import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'antd'
import API from '../api'
import StateContext from '../context/StateContext'
import Header from './Header'
import SearchBar from './SearchBar'
import Results from './Results'

const Layout = props => {
  const [state, setState] = useContext(StateContext)

  const retrieveJobs = async () => {
    API.get(`jobs`).then(res => {
      setState({
        ...state,
        jobs: res.data
      })
    })
  }

  useEffect(() => {
    retrieveJobs()
  }, [])

  return (
    <Row>
      <Col offset={8} span={8}>
        <Header/>
        <SearchBar/>
        <Results/>
      </Col>
    </Row>
  )
}

export default Layout