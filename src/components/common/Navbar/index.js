import React from 'react'
import { Row, Col } from 'antd'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user = useSelector((state) => state.user)

  return (
    <>
      <Row>
        <Col xs={0} md={24}>
          <DesktopNavbar user={user} />
        </Col>
        <Col xs={24} md={0}>
          <MobileNavbar user={user} />
        </Col>
      </Row>
    </>
  )
}

export default Navbar
