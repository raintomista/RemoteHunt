import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import { AddJobModal } from './components/Modal'
import StateContext from './context/StateContext'
import 'antd/dist/antd.css'

const App = () => {
  const state = useState({
    jobs: [],
    modal: true
  })

  return (
    <StateContext.Provider value={state}>
      <AddJobModal/>
      <Layout/>
    </StateContext.Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))