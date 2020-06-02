import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import API from '../api'
import StateContext from '../context/StateContext'

export const AddModal = props => {
  const [state, setState] = useContext(StateContext)
  const [form] = Form.useForm()

  const handleCancel = event => {
    form.resetFields()
    setState({
      ...state,
      addModal: false
    })
  }

  const handleSubmit = async (event) => {
    const newJob = await form.validateFields()
    const updatedJobs = state.jobs.slice()
    API.post('jobs', newJob)
      .then(({ data: newJob }) => updatedJobs.unshift(newJob))
      .then(() => form.resetFields())
      .then(() => setState({
        jobs: updatedJobs,
        addModal: false
      }))
      .catch(err => {
        throw new Error(err)
      })
  }

  return (
    <Modal
      visible={state.addModal}
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

export const EditModal = props => {
  const [state, setState] = useContext(StateContext)
  const [form] = Form.useForm()

  const { editModal, editForm } = state

  const handleCancel = event => {
    form.resetFields()
    setState({
      ...state,
      editModal: false,
      editForm: null
    })
  }

  const handleSubmit = () => {
    const url = `jobs/${editForm.id}`
    form.validateFields()
      .then(updatedJob => API.patch(url, updatedJob))
      .then(() => API.get(`jobs`))
      .then(response => setState({
        ...state,
        jobs: response.data,
        editModal: false
      }))
      .then(() => form.resetFields())
      .catch(err => {
        throw new Error(err)
      })
  }

  useEffect(() => {
    if (editModal) {
      const fieldData = Object
        .entries(editForm)
        .map(([name, value]) => ({
          touched: false,
          validating: false,
          errors: [],
          name: name,
          value
        }))

      form.setFields(fieldData)
    }
  }, [editModal])

  return (
    <React.Fragment>
      {(
        <Modal
          visible={editModal}
          title="Edit Modal"
          closable={false}
          maskClosable={false}
          okText="Edit Job"
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
      )}
    </React.Fragment>
  )
}
