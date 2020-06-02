import React from 'react'
import { Col, Row, Input, Select, Button } from 'antd'
import { FilterFilled } from '@ant-design/icons'

const SearchBar = props => {
  return (
    <Input.Group>
      <Row gutter={16}>
        <Col span={12}>
          <Input
            disabled
            placeholder="Search job title or keyword"
          />
        </Col>
        <Col span={6}>
          <Select
            disabled
            showSearch
            style={{ width: '100%' }}
            placeholder="City"
            optionFilterProp="children"
          >
          </Select>
        </Col>
        <Col span={6}>
          <Button
            disabled
            style={{ width: '100%' }}
          >
            <FilterFilled/> Filters
          </Button>  
        </Col>
      </Row>
    </Input.Group>
  )
}

export default SearchBar