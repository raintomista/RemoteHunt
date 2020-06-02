import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Layout/>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))