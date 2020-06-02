import React from 'react'
import { Card, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const EditButton = () => (
  <Button key="edit" type="text">
    <EditOutlined/> Edit
  </Button>
)

const DeleteButton = () => (
  <Button key="edit" type="text">
    <EditOutlined/> Edit
  </Button>
)

const JobCard = props => {
  return (
    <Card
      key={props.id}
      style={{ marginBottom: 20 }}
      actions={[
        <EditButton/>,
        <DeleteButton/>
      ]}
    >
      <h3>{props.company}</h3>
      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
    </Card>
  )
}

export default JobCard