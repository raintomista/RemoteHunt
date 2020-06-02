import React, { useContext } from 'react'
import { Card, Button, Typography } from 'antd'

import JobCard from './JobCard'
import StateContext from './StateContext'

const Results = props => {
  const [state] = useContext(StateContext)
  const { jobs } = state

  return (
    <React.Fragment>
      <Typography.Title
        level={4}
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