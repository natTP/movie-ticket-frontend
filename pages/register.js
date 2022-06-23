import React from 'react'
import { useMutation } from '@apollo/client'
import { Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterMutation } from '../src/mutations/user'
import Head from '../src/components/Head'
import UserForm from '../src/components/userForm'
import { useRouter } from 'next/router'

const { Title } = Typography

const RegisterPage = () => {
  const [register, { data, loading, error }] = useMutation(RegisterMutation)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()

  if (user.token)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        คุณเข้าสู่ระบบแล้ว
      </Title>
    )

  const onFinish = async (values) => {
    try {
      const { data } = await register({ variables: { input: values } })
      dispatch({
        type: 'login',
        payload: { email: values.email, token: data.register.token },
      })
      router.back()
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

export default RegisterPage
