import React from 'react'
import { Row, Col, Affix } from 'antd'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user = useSelector((state) => state.user)

  return (
    <Affix>
      <Row>
        <Col xs={0} md={24}>
          <DesktopNavbar user={user} />
        </Col>
        <Col xs={24} md={0}>
          <MobileNavbar user={user} />
        </Col>
      </Row>
    </Affix>
  )
}

export default Navbar
