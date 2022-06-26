import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Typography, Spin, Space } from 'antd'
import Head from '../../../src/components/Head'
import ReservationSteps from '../../../src/components/ReservationSteps'
import { GetMovieByIDQuery } from '../../../src/queries/movie'
import MovieBanner from '../../../src/components/MovieBanner'

const { Title } = Typography

const SelectShowtimePage = () => {
  const router = useRouter()
  let { id } = router.query

  const { loading, error, data } = useQuery(GetMovieByIDQuery, {
    variables: { _id: id },
  })

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />
  if (error)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        {error.message}
      </Title>
    )

  const movie = data.getMovieByID

  // TODO : Show movie name in head
  return (
    <>
      <Head
        title={`เลือกรอบฉาย | ${movie.name}`}
        name='select showtime'
        content='select showtime'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <ReservationSteps current={0} />
        <MovieBanner movie={movie} />
      </Space>
    </>
  )
}

export default SelectShowtimePage
