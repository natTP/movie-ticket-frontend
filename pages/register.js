import { useMutation } from '@apollo/client'
import { Typography } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterMutation } from '../src/mutations/user'
import Head from '../src/components/Head'
import UserForm from '../src/components/userForm'

const { Title } = Typography

const Register = () => {
  const [register, { data, loading, error }] = useMutation(RegisterMutation)
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    try {
      const data = await register({ variables: { input: values } })
      // TODO : dispatch to redux
    } catch (error) {
      console.log(error.message)
    }
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

      <UserForm
        register
        onFinish={onFinish}
        loading={loading}
        error={error}
        data={data}
      />
    </>
  )
}

export default Register
