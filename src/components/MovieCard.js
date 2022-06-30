import React from 'react'
import { Card, Typography } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import { cyan } from '@ant-design/colors'
import Image from 'next/image'
import { formatDate } from '../utils/dateTimeUtils'
import Link from 'next/link'

const { Text, Title } = Typography

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/reserve/movie/${movie._id}`}>
      <Card
        hoverable
        bordered={false}
        cover={
          <Image
            src={movie.poster}
            alt={movie.name}
            width='485px'
            height='728px'
            layout='responsive'
          />
        }
        style={{ height: '100%' }}
      >
        <Text style={{ color: cyan[5] }}>
          เข้าฉาย {formatDate(movie.releaseDate)}
        </Text>
        <Title level={4} style={{ marginTop: '0.5rem' }}>
          {movie.name}
        </Title>
        <Text type='secondary'>
          {movie.genre.join(' · ')}{' '}
          <span style={{ margin: '0rem 0.25rem 0rem 0.25rem' }}>|</span>{' '}
          <ClockCircleOutlined /> {movie.duration} นาที
        </Text>
      </Card>
    </Link>
  )
}

export default MovieCard
