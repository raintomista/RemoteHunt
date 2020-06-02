import React, { useContext } from 'react'
import { Card, Button, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import StateContext from '../context/StateContext'
import API from '../api'

const EditButton = () => (
  <Button key="edit" type="text">
    <EditOutlined/> Edit
  </Button>
)

const DeleteButton = props => {
  const [state, setState] = useContext(StateContext)

  const handleConfirm = async () => {
    await API.delete(`jobs/${props.jobId}`)
    const response = await API.get(`jobs`)
    setState({
      ...state,
      jobs: response.data
    })
  }

  const handleClick = event => {
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
      style={{ marginBottom: 20 }}
      actions={[
        <EditButton/>,
        <DeleteButton jobId={props.id}/>
      ]}
    >
      <h3>{props.company}</h3>
      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
    </Card>
  )
}

export default JobCard