import React from 'react'
import { Space } from 'antd'
import Head from '../../src/components/Head'
import ReservationSteps from '../../src/components/ReservationSteps'
import MovieBanner from '../../src/components/MovieBanner'

const selectSeatPage = () => {
  return (
    <>
      <Head
        title={`เลือกที่นั่ง | movie.name`}
        name='select showtime'
        content='select showtime'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <ReservationSteps current={1} />
        {/* <MovieBanner movie={movie} /> */}
      </Space>
    </>
  )
}

export default selectSeatPage
