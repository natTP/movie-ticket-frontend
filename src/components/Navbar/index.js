import React from 'react'
import { Row, Col } from 'antd'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <>
      <Row>
        <Col xs={0} md={24}>
          <DesktopNavbar />
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={0}>
          <MobileNavbar />
        </Col>
      </Row>
    </>
  )
}

export default Navbar
