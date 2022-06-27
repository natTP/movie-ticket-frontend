import React from 'react'
import { Typography, Row, Card, Button, Col } from 'antd'
import { hasPassed, ISOStringtoTime } from '../utils/dateTimeUtils'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const { Title, Text } = Typography

const TheaterCard = ({ theater }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <Card bordered={false}>
      <Title level={4}>{theater.theater.location}</Title>
      <Row gutter={[8, 8]}>
        <Col xs={24} lg={2}>
          <Text type='secondary' style={{ marginRight: '1rem' }}>
            {theater.theater.name} | {theater.language}
          </Text>
        </Col>
        {theater.showtimes.map((showtime) => (
          <Col key={showtime.id}>
            <Button
              disabled={hasPassed(showtime.dateTime)}
              onClick={() => {
                dispatch({
                  type: 'select showtime',
                  payload: {
                    showtime: showtime.id,
                  },
                })
                router.push('/reserve/select-seat')
              }}
            >
              {ISOStringtoTime(showtime.dateTime)}
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default TheaterCard
