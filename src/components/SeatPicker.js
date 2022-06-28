import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import Seatmap from 'react-seat-picker'
import styled from 'styled-components'
import SeatTypeDisplay from './SeatTypeDisplay'
import InfoDisplay from './common/InfoDisplay'
import { useDispatch, useSelector } from 'react-redux'

const { Text } = Typography

const MovieScreen = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  background-color: #fff;
`

const SeatPicker = ({ seatTypes, reservedSeats }) => {
  const [loading, setLoading] = useState(false)
  const { seats, price } = useSelector((state) => state.reservation)
  const dispatch = useDispatch()

  const rows = []
  seatTypes.forEach((type, idx) => {
    const orientation = ['south', 'north']
    type.rows.forEach((rowNumber) => {
      const row = []
      for (let i = 1; i <= 10; i++) {
        const id = rowNumber + i.toString()
        row.push({
          id: id,
          number: i,
          orientation: orientation[idx],
          isSelected: seats.includes(id),
          isReserved: reservedSeats.includes(id),
        })
      }
      rows.push(row)
    })
    type = { ...type }
  })

  const getPrice = (row) => {
    for (const type of seatTypes) {
      if (type.rows.includes(row)) return type.price
    }
    return undefined
  }

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setLoading(true)
    addCb(row, number, id)
    dispatch({
      type: 'add seat',
      payload: { seat: id, price: getPrice(row) },
    })
    setLoading(false)
  }

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setLoading(true)
    removeCb(row, number, id)
    dispatch({
      type: 'remove seat',
      payload: { seat: id, price: getPrice(row) },
    })
    setLoading(false)
  }

  return (
    <Space size='large' direction='vertical' style={{ width: '100%' }}>
      <Seatmap
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        selectedByDefault={true}
        rows={rows}
        loading={loading}
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
            <InfoDisplay heading='ที่นั่งที่เลือก' content={seats.join(', ')} />
            <InfoDisplay heading='ราคารวม' content={`${price} บาท`} />
          </Space>
        </Col>
        <Col xs={24} sm={22}>
          <Button type='primary' block disabled={seats.length === 0}>
            ดำเนินการต่อ
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </Space>
  )
}

export default SeatPicker
