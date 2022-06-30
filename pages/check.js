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
            movie={data.getReservationByID.showtime.movie}
            theater={data.getReservationByID.showtime.theater}
            language={data.getReservationByID.showtime.language}
            dateTime={data.getReservationByID.showtime.dateTime}
            seats={data.getReservationByID.seats}
            price={data.getReservationByID.price}
            refCode={data.getReservationByID._id}
          />
        ) : (
          <Empty />
        )}
      </Space>
    </>
  )
}

export default CheckPage
