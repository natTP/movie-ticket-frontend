import Head from 'next/head'
import { Typography } from 'antd'
import React from 'react'
import UserForm from '../src/components/userForm'

const { Title } = Typography

const Register = () => {
  const onFinish = (values) => {
    console.log('success', values)
  }

  return (
    <>
      <Head
        title='Cinema | เข้าสู่ระบบ'
        name='login'
        content='log in to your account'
      />

      <Title level={1} style={{ textAlign: 'center' }}>
        เข้าสู่ระบบ
      </Title>

      <UserForm register={false} onFinish={onFinish} />
    </>
  )
}

export default Register
