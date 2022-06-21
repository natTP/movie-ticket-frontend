import { Button, Form, Input, Typography } from 'antd'
import React from 'react'
import Head from '../src/components/Head'
import UserForm from '../src/components/userForm'

const { Title } = Typography

const Register = () => {
  const onFinish = (values) => {
    console.log('success', values)
  }

  return (
    <>
      <Head
        title='Cinema | สมัครสมาชิก'
        name='register'
        content='create an account'
      />

      <Title level={1} style={{ textAlign: 'center' }}>
        สมัครสมาชิก
      </Title>

      <UserForm register onFinish={onFinish} />
    </>
  )
}

export default Register
