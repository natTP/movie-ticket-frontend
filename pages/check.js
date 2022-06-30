import React from 'react'
import { Typography, Input, Space, Spin, Empty } from 'antd'
import Head from '../src/components/common/Head'
import { useLazyQuery } from '@apollo/client'
import { GetReservationByIDQuery } from '../src/queries/reservation'
import MovieBanner from '../src/components/MovieBanner'

const { Title } = Typography

const CheckPage = () => {
  const [getReservationByID, { loading, error, data }] = useLazyQuery(
    GetReservationByIDQuery
  )

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />

  const onSearch = (value) => {
    getReservationByID({ variables: { id: value } })
  }

  const reservation = data.getReservationByID

  return (
    <>
      <Head
        title='ตรวจสอบรายละเอียดภาพยนตร์'
        name='check reservation'
        content='check reservation ticlet'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <Title level={1} style={{ textAlign: 'center' }}>
          ตรวจสอบรายละเอียดตั๋วภาพยนตร์
        </Title>
        <Input.Search
          placeholder='ค้นหาด้วย Reference code'
          onSearch={onSearch}
        />
        {data ? (
          <MovieBanner
            movie={reservation.showtime.movie}
            theater={reservation.showtime.theater}
            language={reservation.showtime.language}
            dateTime={reservation.showtime.dateTime}
            seats={reservation.seats}
            price={reservation.price}
            refCode={reservation._id}
          />
        ) : (
          <Empty />
        )}
      </Space>
    </>
  )
}

export default CheckPage
