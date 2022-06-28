import React from 'react'
import { Typography, Spin, Space } from 'antd'
import Head from '../../src/components/common/Head'
import ReservationSteps from '../../src/components/common/ReservationSteps'
import MovieBanner from '../../src/components/MovieBanner'
import BackButton from '../../src/components/common/BackButton'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'

const PayPage = () => {
  return (
    <>
      <Head
        title={`ชำระเงิน | {movie.name}`}
        name='select seat'
        content='select seat'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={2} />
        {/* <MovieBanner
          movie={movie}
          theater={theater}
          language={language}
          dateTime={dateTime}
        /> */}
      </Space>
    </>
  )
}

export default PayPage
