import React, { useContext } from 'react'
import { Card, Button, Typography } from 'antd'
import StateContext from '../context/StateContext'
import JobCard from './JobCard'

const Results = props => {
  const [state, setState] = useContext(StateContext)

  return (
    <React.Fragment>
      <Typography.Title level={3}>
        {`${state.jobs.length} Result/s`} 
      </Typography.Title>

      {state.jobs.map(job => (
        <JobCard
          {...job}
          key={job.id}
        />
      ))}

    </React.Fragment>
  )
}

export default Results