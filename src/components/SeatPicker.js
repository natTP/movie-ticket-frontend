import { Space, Typography } from 'antd'
import React, { useState } from 'react'
import Seatmap from 'react-seat-picker'
import styled from 'styled-components'

const { Text } = Typography

const SeatIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 0px 0px 8px 0px;
  background-color: ${({ color }) => color};
`

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
      <div>
        {seatTypes.map((type) => (
          <>
            <SeatIcon color={'#fff'} />
            <Text>{type.type}</Text>
          </>
        ))}
      </div>
      <Seatmap
        rows={rows}
        alpha
        visible
        maxReservableSeats={rows.length * rows[0].length}
      />
      <MovieScreen>จอภาพยนตร์</MovieScreen>
    </Space>
  )
}

export default SeatPicker
