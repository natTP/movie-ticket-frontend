import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import Navbar from './Navbar'
import breakpoints from '../../../styles/breakpoints'

const { Content, Footer } = Layout

const StyledContent = styled(Content)`
  margin: auto;
  padding: 4rem 2rem 4rem 2rem;
  min-height: max-content;
  width: 100%;
  max-width: ${breakpoints.xl};
`

const MyLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <StyledContent>{children}</StyledContent>
      <Footer style={{ textAlign: 'center' }}>Cinema ©2022</Footer>
    </Layout>
  )
}

export default MyLayout
