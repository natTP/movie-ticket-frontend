import React from 'react'
import client from '../../../src/config/initApollo'
import { Alert, Space, Button } from 'antd'
import Head from '../../../src/components/common/Head'
import ReservationSteps from '../../../src/components/common/ReservationSteps'
import MovieBanner from '../../../src/components/MovieBanner'
import BackButton from '../../../src/components/common/BackButton'
import { GetReservationByIDQuery } from '../../../src/queries/reservation'
import Link from 'next/link'

const CompletePage = ({ data }) => {
  const reservation = data.getReservationByID

  return (
    <>
      <Head
        title='การจองสำเร็จ'
        name='reservation complete'
        content='reservation complete'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={3} />
        <MovieBanner
          movie={reservation.showtime.movie}
          theater={reservation.showtime.theater}
          language={reservation.showtime.language}
          dateTime={reservation.showtime.dateTime}
          seats={reservation.seats}
          price={reservation.price}
          refCode={reservation._id}
        />
        <Alert
          message='การจองสำเร็จแล้ว สามารถนำ Reference Code ไปใช้ค้นหาเพื่อตรวจสอบรายละเอียดภาพยนตร์'
          type='success'
          showIcon
        />
        <Link href='/'>
          <Button type='primary' block>
            กลับหน้าหลัก
          </Button>
        </Link>
      </Space>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: GetReservationByIDQuery,
    variables: {
      id: query.reservationID,
    },
  })
  return { props: { data } }
}

export default CompletePage
