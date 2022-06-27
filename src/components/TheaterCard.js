import React from 'react'
import { Typography, Row, Card, Button, Col } from 'antd'
import { hasPassed, ISOStringtoTime } from '../utils/dateTimeUtils'
import { useRouter } from 'next/router'

const { Title, Text } = Typography

const TheaterCard = ({ theater }) => {
  const router = useRouter()

  const onClick = () => {
    // TODO : Save reservation state into redux store
    router.push('/reserve/select-seat')
  }

  return (
    <Card bordered={false}>
      <Title level={4}>{theater.theater.location}</Title>
      <Row gutter={[8, 8]}>
        <Col xs={24} lg={2}>
          <Text type='secondary' style={{ marginRight: '1rem' }}>
            {theater.theater.name} | {theater.language}
          </Text>
        </Col>
        {theater.showtimes.map((showtime, i) => (
          <Col key={i}>
            <Button disabled={hasPassed(showtime)} onClick={onClick}>
              {ISOStringtoTime(showtime)}
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default TheaterCard
