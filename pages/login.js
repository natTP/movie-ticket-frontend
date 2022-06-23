import Head from 'next/head'
import { Typography } from 'antd'
import React from 'react'
import UserForm from '../src/components/userForm'
import { useMutation } from '@apollo/client'
import { LoginMutation } from '../src/mutations/user'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const { Title } = Typography

const LoginPage = () => {
  const [login, { data, loading, error }] = useMutation(LoginMutation)
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
      const { data } = await login({ variables: { input: values } })
      dispatch({
        type: 'login',
        payload: { email: values.email, token: data.login.token },
      })
      router.back()
    } catch (error) {
      console.log(error.message)
    }
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

      <UserForm
        register={false}
        onFinish={onFinish}
        loading={loading}
        error={error}
        data={data}
      />
    </>
  )
}

export default LoginPage
