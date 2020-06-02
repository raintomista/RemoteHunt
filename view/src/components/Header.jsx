import React, { useContext } from "react"
import { PageHeader, Button } from 'antd'
import StateContext from "../context/StateContext"

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
      extra={[
        <Button
          key="add-job"
          type="primary"
          onClick={handleClick}
        >
          Add Job
        </Button>
      ]}
    >
    </PageHeader>
  )
}
export default Header