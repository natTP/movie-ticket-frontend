import React, { useState } from 'react'
import Link from 'next/link'
import {
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import { Button, Layout, Divider, Space, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import client from '../../config/initApollo'

const { Header } = Layout
const { Text } = Typography

const MenuToggle = styled(Button)`
  display: inline;
`

const Menu = styled(Space)`
  width: 100%;
  padding: 1rem 3rem 2rem 3rem;
  text-align: left;

  background-color: #fff;
`

const StyledNavbar = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  position: sticky;
  top: 0;

  background-color: #fff;
`

const MobileNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch({ type: 'logout' })
    client.clearStore()
  }

  return (
    <>
      <StyledNavbar>
        <MenuToggle type='default' onClick={() => setIsOpen(!isOpen)}>
          <MenuOutlined />
        </MenuToggle>

        <Space size={1}>
          {user.token ? (
            <Button type='default' icon={<LogoutOutlined />} onClick={onClick}>
              ออกจากระบบ
            </Button>
          ) : (
            <>
              <Link href='/login'>
                <Button type='link' icon={<LoginOutlined />}>
                  เข้าสู่ระบบ
                </Button>
              </Link>
              <Link href='/register'>
                <Button type='primary'>สมัครสมาชิก</Button>
              </Link>
            </>
          )}
        </Space>
      </StyledNavbar>

      {isOpen && (
        <Menu
          direction='vertical'
          split={
            <Divider direction='horizontal' style={{ margin: '0.5rem' }} />
          }
        >
          <Link href='/'>ภาพยนตร์ทั้งหมด</Link>
          <Link href='/check'>ตรวจสอบรายละเอียดตั๋วภาพยนตร์</Link>
          <Space>
            <Avatar size='small' icon={<UserOutlined />} />
            <Text type='secondary'>{user.email}</Text>
          </Space>
        </Menu>
      )}
    </>
  )
}

export default MobileNavbar