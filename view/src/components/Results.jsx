import React, { useContext } from 'react'
import { Card, Button, Typography } from 'antd'
import StateContext from '../context/StateContext'
import JobCard from './JobCard'

const Results = props => {
  const [state, setState] = useContext(StateContext)
  const { jobs } = state

  return (
    <React.Fragment>
      <Typography.Title
        level={3}
        style={{
          margin: 0,
          paddingTop: 16,
          paddingBottom: 16
        }}
      >
        {jobs.length} Result/s
      </Typography.Title>

      {jobs.map(job => (
        <JobCard
          {...job}
          key={job.id}
        />
      ))}
    </React.Fragment>
  )
}

export default Results