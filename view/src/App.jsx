import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import StateContext from './context/StateContext'
import 'antd/dist/antd.css'

const App = () => {
  const state = useState({
    jobs: []
  })

  return (
    <StateContext.Provider value={state}>
      <Layout/>
    </StateContext.Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))