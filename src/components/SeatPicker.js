import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import Seatmap from 'react-seat-picker'
import styled from 'styled-components'
import SeatTypeDisplay from './SeatTypeDisplay'
import InfoDisplay from './common/InfoDisplay'

const { Text } = Typography

const MovieScreen = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  background-color: #fff;
`

const SeatPicker = ({ seatTypes }) => {
  const [loading, setLoading] = useState(false)

  const rows = []
  seatTypes.forEach((type, idx) => {
    const orientation = ['south', 'north']
    type.rows.forEach((rowNumber) => {
      const row = []
      for (let i = 1; i <= 10; i++) {
        row.push({
          id: rowNumber + i.toString(),
          number: i,
          orientation: orientation[idx],
        })
      }
      rows.push(row)
    })
    type = { ...type }
  })

  // const addSeatCallback = ({ row, number, id }, addCb)

  return (
    <Space size='large' direction='vertical' style={{ width: '100%' }}>
      <Seatmap
        rows={rows}
        alpha
        visible
        maxReservableSeats={rows.length * rows[0].length}
      />
      <MovieScreen>จอภาพยนตร์</MovieScreen>

      <Row
        align='middle'
        justify='center'
        gutter={[0, 16]}
        style={{ paddingLeft: '1.5rem' }}
      >
        <Col xs={24} sm={10}>
          <Space direction='vertical'>
            {seatTypes.map((type, idx) => (
              <SeatTypeDisplay type={type} idx={idx} key={idx} />
            ))}
          </Space>
        </Col>
        <Col xs={0} sm={2}>
          <Divider type='vertical' style={{ height: '100px' }} />
        </Col>

        <Col xs={24} sm={10}>
          <Space direction='vertical'>
            <InfoDisplay
              heading='ที่นั่งที่เลือก'
              content='A1 A2 A3 A1 A2 A3 A1 A2 A3 A1 A2 A3 A1 A2 A3 A1 A2 A3'
            />
            <InfoDisplay heading='ราคารวม' content='1000 บาท' />
          </Space>
        </Col>
        <Col xs={22}>
          <Button type='primary' block>
            ดำเนินการต่อ
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </Space>
  )
}

export default SeatPicker
