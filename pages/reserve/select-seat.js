import React from 'react'
import { Space } from 'antd'
import Head from '../../src/components/common/Head'
import ReservationSteps from '../../src/components/common/ReservationSteps'
import MovieBanner from '../../src/components/MovieBanner'
import BackButton from '../../src/components/common/BackButton'

const selectSeatPage = () => {
  return (
    <>
      <Head
        title={`เลือกที่นั่ง | movie.name`}
        name='select showtime'
        content='select showtime'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={1} />
        {/* <MovieBanner movie={movie} /> */}
      </Space>
    </>
  )
}

export default selectSeatPage
