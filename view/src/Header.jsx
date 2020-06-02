import React, { useContext } from "react"
import { PageHeader, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import StateContext from "./StateContext"

const Header = props => {
  const [state, useState] = useContext(StateContext)

  const handleClick = () => {
    useState({
      ...state,
      addModal: true
    })
  }
  
  return (
    <PageHeader
      title="Remotehunt"
      style={{
        paddingLeft: 0,
        paddingRight: 0
      }}
      extra={[
        <Button
          key="add-job"
          type="primary"
          onClick={handleClick}
        >
          <PlusOutlined/> Add Job
        </Button>
      ]}
    >
    </PageHeader>
  )
}
export default Header