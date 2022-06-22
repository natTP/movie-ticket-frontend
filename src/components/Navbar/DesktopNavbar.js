import React from 'react'
import Link from 'next/link'
import { LoginOutlined } from '@ant-design/icons'
import { Button, Layout, Divider, Space } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

const StyledNavbar = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  position: sticky;
  top: 0;

  background-color: #fff;
`

const DesktopNavbar = () => {
  return (
    <StyledNavbar>
      <Space split={<Divider type='vertical' />}>
        <Link href='/'>ภาพยนตร์ทั้งหมด</Link>
        <Link href='/check'>ตรวจสอบรายละเอียดตั๋วภาพยนตร์</Link>
      </Space>

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

export default DesktopNavbar
