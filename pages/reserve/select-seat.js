import React from 'react'
import { Typography, Spin, Space } from 'antd'
import Head from '../../src/components/common/Head'
import ReservationSteps from '../../src/components/common/ReservationSteps'
import MovieBanner from '../../src/components/MovieBanner'
import BackButton from '../../src/components/common/BackButton'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import { GetShowtimeByIDQuery } from '../../src/queries/showtime'
import SeatPicker from '../../src/components/SeatPicker'

const { Title } = Typography

const selectSeatPage = () => {
  const showtimeID = useSelector((state) => state.reservation.showtime)
  const { loading, error, data } = useQuery(GetShowtimeByIDQuery, {
    variables: { _id: showtimeID },
  })

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />
  if (error)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        {error.message}
      </Title>
    )

  const { movie, theater, reservedSeats, dateTime, language } =
    data.getShowtimeByID

  return (
    <>
      <Head
        title={`เลือกที่นั่ง | ${movie.name}`}
        name='select seat'
        content='select seat'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={1} />
        <MovieBanner
          movie={movie}
          theater={theater}
          language={language}
          dateTime={dateTime}
        />
        <SeatPicker seatTypes={theater.seats} reservedSeats={reservedSeats} />
      </Space>
    </>
  )
}

export default selectSeatPage
