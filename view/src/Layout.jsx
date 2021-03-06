import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'antd'

import API from './api'
import Header from './Header'
import SearchBar from './SearchBar'
import Spinner from './Spinner'
import Results from './Results'
import StateContext from './StateContext'

const Layout = props => {
  const [state, setState] = useContext(StateContext)

  const retrieveJobs = async () => {
    API.get(`jobs`).then(res => {
      setState({
        ...state,
        jobs: res.data,
        loading: false
      })
    })
  }

  useEffect(() => {
    retrieveJobs()
  }, [])

  return (
    <Row>
      <Col
        offset={8}
        span={8}
      >
        <Header/>
        <SearchBar/>
        {state.loading
          ? <Spinner/>
          : <Results/>
        }
      </Col>
    </Row>
  )
}

export default Layout