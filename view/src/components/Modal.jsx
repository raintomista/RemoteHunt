import React, { useContext } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import API from '../api'
import StateContext from '../context/StateContext'

export const AddJobModal = props => {
  const [state, setState] = useContext(StateContext)
  const [form] = Form.useForm()

  const createJob = async (job) => {
    try {
      const response = await API.post('jobs', job)
      const updatedJobs = state.jobs.slice()
      updatedJobs.unshift(response.data)
      
      setState({
        ...state,
        jobs: updatedJobs,
        modal: false
      })
    } catch(err) {
      throw new Error(err)
    }
  }

  const handleCancel = event => {
    setState({
      ...state,
      modal: false
    })
  }

  const handleSubmit = async (event) => {
    const formValue = await form.validateFields()
    createJob(formValue)
  }

  return (
    <Modal
      visible={state.modal}
      title="Add Job"
      closable={false}
      maskClosable={false}
      okText="Submit"
      onCancel={handleCancel}
      onOk={handleSubmit}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Job Title"
          name="title"
          rules={[{ required: true, message: 'Please enter job title!' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: 'Please enter company name!' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Link to Apply"
          name="url"
          rules={[{ required: true, message: 'Please enter link to apply!' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Job Description"
          name="description"
          rules={[{ required: true, message: 'Please enter job description!' }]}
        >
          <Input.TextArea
            autoSize={{
              minRows: 4,
              maxRows: 4
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
