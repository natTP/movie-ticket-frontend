import React, { useState } from 'react'
import Link from 'next/link'
import { LoginOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Layout, Divider, Space } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

// TODO : Responsive navbar is behaving weird because of Space ?

const MenuToggle = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  } ;
`

const Menu = styled(({ isOpen, children, ...props }) => (
  <Space {...props} direction={isOpen ? 'vertical' : 'horizontal'}>
    {children}
  </Space>
))`
  @media (max-width: 768px) {
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '100vh' : '0px')};
  }
`

const StyledNavbar = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  position: sticky;
  top: 0;

  background-color: #fff;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledNavbar>
      <MenuToggle type='default' onClick={() => setIsOpen(!isOpen)}>
        <MenuOutlined />
      </MenuToggle>

      <Menu split={<Divider type='vertical' />} isOpen={isOpen}>
        <Link href='/'>ภาพยนตร์ทั้งหมด</Link>
        <Link href='/check'>ตรวจสอบรายละเอียดตั๋วภาพยนตร์</Link>
      </Menu>

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
    </StyledNavbar>
  )
}

export default Navbar
