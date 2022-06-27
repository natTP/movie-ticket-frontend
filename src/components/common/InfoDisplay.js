import React from 'react'
import { Space, Typography } from 'antd'

const { Text } = Typography

const InfoDisplay = ({ heading, content }) => {
  return (
    <Space direction='vertical' style={{ display: 'block', marginTop: '1rem' }}>
      <Text type='secondary'>{heading}</Text>
      <Text style={{ fontSize: '1.25rem' }}>{content}</Text>
    </Space>
  )
}

export default InfoDisplay
