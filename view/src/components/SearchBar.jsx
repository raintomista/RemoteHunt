import React from 'react'
import { Col, Row, Input, Select, Button } from 'antd'
import { FilterFilled } from '@ant-design/icons'

const SearchBar = props => {
  return (
    <Input.Group>
      <Row gutter={16}>
        <Col span={12}>
          <Input placeholder="Search job title or keyword"/>
        </Col>
        <Col span={6}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="City"
            optionFilterProp="children"
          >
            <Select.Option value="San Francisco">San Francisco</Select.Option>
            <Select.Option value="New York">New York</Select.Option>
            <Select.Option value="Manila">Manila</Select.Option>
          </Select>
        </Col>
        <Col span={6}>
          <Button style={{ width: '100%' }}>
            <FilterFilled/> Filters
          </Button>  
        </Col>
      </Row>
    </Input.Group>
  )
}

export default SearchBar