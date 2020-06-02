import React from "react"
import { PageHeader, Button } from 'antd'

const Header = props => (
  <PageHeader
    title="Remotehunt"
    extra={[
      <Button key="about">About</Button>,
      <Button key="employers">Employers</Button>,
      <Button key="contact">Contact</Button>,
      <Button type="primary">Add Job</Button>,
    ]}
  >
  </PageHeader>
)

export default Header