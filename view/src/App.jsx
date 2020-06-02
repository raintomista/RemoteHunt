import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import { AddModal, EditModal } from './components/Modal'
import StateContext from './context/StateContext'
import 'antd/dist/antd.css'

const App = () => {
  const state = useState({
    jobs: [],
    addModal: false,
    editModal: false,
    editForm: null
  })

  return (
    <StateContext.Provider value={state}>
      <Layout/>
      <AddModal/>
      <EditModal/>
    </StateContext.Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))