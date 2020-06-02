import React, { useContext } from 'react'
import { Card, Button, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, LinkOutlined } from '@ant-design/icons'

import API from './api'
import StateContext from './StateContext'

const ApplyButton = props => {
  const handleClick = () => {
    window.open(props.url, '__blank')
  }
  
  return (
    <Button
      key="apply"
      type="text"
      onClick={handleClick}
    >
      <LinkOutlined/> Apply
    </Button>
  )
}

const EditButton = props => {
  const [state, setState] = useContext(StateContext)

  const handleClick = () => {
    setState({
      ...state,
      editModal: true,
      editForm: props
    })
  }
  
  return (
    <Button
      key="edit"
      type="text"
      onClick={handleClick}
    >
      <EditOutlined/> Edit
    </Button>
  )
}

const DeleteButton = props => {
  const [state, setState] = useContext(StateContext)

  const handleConfirm = async () => {
    await API.delete(`jobs/${props.id}`)
    const response = await API.get(`jobs`)
    setState({
      ...state,
      jobs: response.data
    })
  }

  const handleClick = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this job post?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Delete',
      onOk: handleConfirm
    })
  }
  
  return (
    <Button
      key="edit"
      type="text"
      onClick={handleClick}
    >
      <DeleteOutlined/> Delete
    </Button>
  )
}

const JobCard = props => {
  return (
    <Card
      key={props.id}
      style={{ marginBottom: 16 }}
      actions={[
        <ApplyButton url={props.url}/>,
        <EditButton {...props}/>,
        <DeleteButton id={props.id}/>
      ]}
    >
      <h3>{props.company}</h3>
      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
    </Card>
  )
}

export default JobCard