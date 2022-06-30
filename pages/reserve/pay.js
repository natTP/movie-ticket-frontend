import React, { useEffect, useState } from 'react'
import { Typography, Spin, Space, Button } from 'antd'
import Head from '../../src/components/common/Head'
import ReservationSteps from '../../src/components/common/ReservationSteps'
import MovieBanner from '../../src/components/MovieBanner'
import BackButton from '../../src/components/common/BackButton'
import { GetShowtimeByIDQuery } from '../../src/queries/showtime'
import { useSelector } from 'react-redux'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { CreateReservationMutation } from '../../src/mutations/reservation'

const { Title } = Typography

const PayPage = () => {
  const [creating, setCreating] = useState(false)
  const [createReservation, createReservationStatus] = useMutation(
    CreateReservationMutation
  )
  const user = useSelector((state) => state.user)
  const { seats, price, showtime } = useSelector((state) => state.reservation)
  const { loading, error, data } = useQuery(GetShowtimeByIDQuery, {
    variables: { _id: showtime },
  })
  const router = useRouter()

  useEffect(() => {
    console.log(creating)
  }, [creating])

  if (!user.token)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        กรุณาเข้าสู่ระบบ
      </Title>
    )

  if (loading || createReservationStatus.loading)
    return <Spin tip='กำลังโหลด...' size='large' />
  if (error || createReservationStatus.error)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        {error.message}
      </Title>
    )

  const { movie, theater, dateTime, language } = data.getShowtimeByID

  const onClick = async () => {
    try {
      setCreating(true)
      const { data } = await createReservation({
        variables: {
          input: {
            user: user.id,
            showtime,
            price,
            seats,
          },
        },
      })
      router.push(
        {
          pathname: '/reserve/complete',
          query: { id: data.createReservation.reservationID },
        },
        '/reserve/complete'
      )
      setCreating(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head
        title={`ชำระเงิน | ${movie.name}`}
        name='payment'
        content='payment'
      />

      {creating && <Spin tip='กำลังโหลด...' size='large' />}
      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={2} />
        <MovieBanner
          movie={movie}
          theater={theater}
          language={language}
          dateTime={dateTime}
          seats={seats}
          price={price}
        />
        <Button type='primary' block onClick={onClick}>
          ชำระเงิน
        </Button>
      </Space>
    </>
  )
}

export default PayPage
