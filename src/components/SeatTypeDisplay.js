import React from 'react'
import { Space, Typography } from 'antd'
import { cyan, gold } from '@ant-design/colors'
import styled from 'styled-components'

const { Text } = Typography

const SeatIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 0px 0px 8px 0px;
  background-color: ${({ color }) => color};
`

const SeatTypeDisplay = ({ type, idx }) => {
  const seatTypeColors = [gold[5], cyan[5]]

  return (
    <Space style={{ marginTop: '1rem' }}>
      <SeatIcon color={seatTypeColors[idx]} />
      <Space direction='vertical' size={0.5}>
        <Space>
          <Text strong>{type.type}</Text>
          <Text>{type.price} บาท</Text>
        </Space>
        <Text>
          {`แถว ${type.rows[0]} - ${type.rows[type.rows.length - 1]}`}
        </Text>
      </Space>
    </Space>
  )
}

export default SeatTypeDisplay
