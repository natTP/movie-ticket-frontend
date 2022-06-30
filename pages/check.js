import React from 'react'
import { Typography, Input, Space, Spin, Empty, Divider } from 'antd'
import Head from '../src/components/common/Head'
import { useLazyQuery } from '@apollo/client'
import {
  GetReservationByIDQuery,
  GetReservationListByUserQuery,
} from '../src/queries/reservation'
import MovieBanner from '../src/components/MovieBanner'
import client from '../src/config/initApollo'
import { useSelector } from 'react-redux'

const { Title } = Typography

const CheckPage = (props) => {
  const user = useSelector((state) => state.user)
  const [getReservationByID, { loading, error, data }] = useLazyQuery(
    GetReservationByIDQuery
  )

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />

  const onSearch = (value) => {
    getReservationByID({
      variables: { id: value },
      fetchPolicy: 'network-only',
    })
  }

  let reservation, reservationList
  if (props.data) reservationList = props.data.getReservationListByUser.data
  if (data) reservation = data.getReservationByID

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
          placeholder='ค้นหาด้วย Reference code...'
          allowClear
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
          !props.data && <Empty />
        )}
        {user.token && props.data && (
          <>
            <Divider />
            <Title level={3}>การจองของฉัน</Title>
            {reservationList.map((reservation) => (
              <MovieBanner
                key={reservation._id}
                movie={reservation.showtime.movie}
                theater={reservation.showtime.theater}
                language={reservation.showtime.language}
                dateTime={reservation.showtime.dateTime}
                seats={reservation.seats}
                price={reservation.price}
                refCode={reservation._id}
              />
            ))}
          </>
        )}
      </Space>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  if (query.user) {
    const { data } = await client.query({
      query: GetReservationListByUserQuery,
      variables: {
        userId: query.user,
      },
      fetchPolicy: 'network-only',
    })
    return { props: { data } }
  }
  return { props: {} }
}

export default CheckPage
