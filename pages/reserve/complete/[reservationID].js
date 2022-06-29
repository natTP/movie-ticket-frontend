import React from 'react'
import { Typography, Spin, Space, Button } from 'antd'
import Head from '../../../src/components/common/Head'
import ReservationSteps from '../../../src/components/common/ReservationSteps'
import MovieBanner from '../../../src/components/MovieBanner'
import BackButton from '../../../src/components/common/BackButton'
import { GetShowtimeByIDQuery } from '../../../src/queries/showtime'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

// TODO get serverside props
const CompletePage = () => {
  return (
    <>
      <Head
        title={`การจองสำเร็จ`}
        name='reservation complete'
        content='reservation complete'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={3} />
        {/* <MovieBanner
          movie={movie}
          theater={theater}
          language={language}
          dateTime={dateTime}
          seats={seats}
          price={price}
        />
        <Button
          type='primary'
          block
          onClick={() => router.push('/reserve/complete')}
        >
          ชำระเงิน
        </Button> */}
      </Space>
    </>
  )
}

export default CompletePage
