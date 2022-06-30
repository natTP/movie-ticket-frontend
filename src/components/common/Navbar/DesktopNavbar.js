import React from 'react'
import Link from 'next/link'
import { LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Layout, Divider, Space, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'

const { Header } = Layout
const { Text } = Typography

const StyledNavbar = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  position: sticky;
  top: 0;

  background-color: #fff;
`

const DesktopNavbar = ({ user }) => {
  const client = useApolloClient()
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch({ type: 'logout' })
    client.clearStore()
  }

  return (
    <StyledNavbar>
      <Space split={<Divider type='vertical' />}>
        <Link href='/'>ภาพยนตร์ทั้งหมด</Link>
        <Link
          href={{
            pathname: '/check',
            query: { user: user.id },
          }}
        >
          ตรวจสอบรายละเอียดตั๋วภาพยนตร์
        </Link>
      </Space>

      {user.token ? (
        <Space size='large'>
          <Space>
            <Avatar size='small' icon={<UserOutlined />} />
            <Text type='secondary'>{user.email}</Text>
          </Space>
          <Button type='default' icon={<LogoutOutlined />} onClick={onClick}>
            ออกจากระบบ
          </Button>
        </Space>
      ) : (
        <Space>
          <Link href='/login'>
            <Button type='link' icon={<LoginOutlined />}>
              เข้าสู่ระบบ
            </Button>
          </Link>
          <Link href='/register'>
            <Button type='primary'>สมัครสมาชิก</Button>
          </Link>
        </Space>
      )}
    </StyledNavbar>
  )
}

export default DesktopNavbar
