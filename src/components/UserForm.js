import React from 'react'
import { Button, Form, Input } from 'antd'
import Link from 'next/link'

const UserForm = ({ register, onFinish }) => {
  return (
    <Form
      name='register'
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 10 }}
      style={{ margin: '1rem' }}
      onFinish={onFinish}
    >
      <Form.Item
        label='อีเมล'
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
            message: 'กรุณากรอกอีเมลให้ถูกต้อง',
          },
        ]}
      >
        <Input placeholder='john@example.com' />
      </Form.Item>
      <Form.Item
        label='รหัสผ่าน'
        name='password'
        rules={[
          {
            required: true,
            min: 8,
            message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร',
          },
        ]}
      >
        <Input placeholder='password' type='password' />
      </Form.Item>
      <Form.Item wrapperCol={{ sm: { offset: 7, span: 10 } }}>
        <Button type='primary' block htmlType='submit'>
          {register ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ sm: { offset: 7, span: 10 } }}>
        <Link href={register ? '/login' : '/register'}>
          <Button type='link' block htmlType='button'>
            {register ? (
              <>
                มีบัญชีแล้วใช่ไหม? <b> เข้าสู่ระบบ</b>
              </>
            ) : (
              <>
                ยังไม่มีบัญชีใช่ไหม? <b> สมัครสมาชิก</b>
              </>
            )}
          </Button>
        </Link>
      </Form.Item>
    </Form>
  )
}

export default UserForm
