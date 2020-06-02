import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'

import Layout from './Layout'
import { AddModal, EditModal } from './Modal'
import StateContext from './StateContext'

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