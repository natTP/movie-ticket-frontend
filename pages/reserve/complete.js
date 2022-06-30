import React, { useEffect } from 'react'
import client from '../../src/config/initApollo'
import { Alert, Space, Button } from 'antd'
import Head from '../../src/components/common/Head'
import ReservationSteps from '../../src/components/common/ReservationSteps'
import MovieBanner from '../../src/components/MovieBanner'
import { GetReservationByIDQuery } from '../../src/queries/reservation'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const CompletePage = ({ data }) => {
  const dispatch = useDispatch()
  const reservation = data.getReservationByID

  useEffect(() => {
    dispatch({ type: 'clear reservation' })
  }, [dispatch])

  return (
    <>
      <Head
        title='การจองสำเร็จ'
        name='reservation complete'
        content='reservation complete'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
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
          message='การจองสำเร็จแล้ว สามารถนำ Reference Code ไปใช้ค้นหาเพื่อตรวจสอบรายละเอียดภาพยนตร์ได้ที่เมนูด้านบน'
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
      id: query.id,
    },
  })
  return { props: { data } }
}

export default CompletePage
