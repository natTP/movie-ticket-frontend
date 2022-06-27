import React from 'react'
import Image from 'next/image'
import { Card, Col, Collapse, Row, Typography } from 'antd'
import { blue } from '@ant-design/colors'
import { ClockCircleOutlined } from '@ant-design/icons'
import { formatDate } from '../utils/formatDateTime'

const { Text, Title } = Typography

const MovieBanner = ({ movie }) => {
  return (
    <Row>
      <Col xs={24} sm={6}>
        <Image
          src={movie.poster}
          width='485px'
          height='728px'
          layout='responsive'
          priority
        />
      </Col>
      <Col xs={24} sm={18}>
        <Card bordered={false} style={{ height: '100%' }}>
          <Text style={{ color: blue.primary }}>
            เข้าฉาย {formatDate(movie.releaseDate)}
          </Text>
          <Title level={2} style={{ marginTop: '0.25rem' }}>
            {movie.name}
          </Title>
          <Text type='secondary'>
            {movie.genre.join(' · ')}{' '}
            <span style={{ margin: '0rem 0.25rem 0rem 0.25rem' }}>|</span>{' '}
            <ClockCircleOutlined /> {movie.duration} นาที
          </Text>
          <Collapse
            bordered={false}
            style={{ marginTop: '2rem' }}
            defaultActiveKey={0}
          >
            <Collapse.Panel header='เรื่องย่อ'>
              <Text>{movie.synopsis}</Text>
            </Collapse.Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

export default MovieBanner
