import React, { useContext } from 'react'
import { Card, Typography } from 'antd'
import StateContext from '../context/StateContext'

const Results = props => {
  const [state, setState] = useContext(StateContext)

  return (
    <React.Fragment>
      <Typography.Title level={2}>
        {`${state.jobs.length} Result/s`} 
      </Typography.Title>

      {state.jobs.map(job => (
        <Card key={job.id}>
          <h3>{job.company}</h3>
          <h4>{job.title}</h4>
          <h5>{job.description}</h5>
        </Card>
      ))}

    </React.Fragment>
  )
}

export default Results