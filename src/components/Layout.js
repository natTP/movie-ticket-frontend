import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import Navbar from './Navbar'

const { Content, Footer } = Layout

const StyledContent = styled(Content)`
  margin: auto;
  padding: 4rem 2rem 0rem 2rem;
  height: 100%;
  width: 100%;
  max-width: 720px;
`

const MyLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Navbar />
      <StyledContent>{children}</StyledContent>
      <Footer style={{ textAlign: 'center' }}>Cinema ©2022</Footer>
    </Layout>
  )
}

export default MyLayout
