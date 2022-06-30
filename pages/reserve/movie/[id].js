import React, { useState } from 'react'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useApolloClient, useLazyQuery, useQuery } from '@apollo/client'
import { Typography, Spin, Space, DatePicker, Empty } from 'antd'
import Head from '../../../src/components/common/Head'
import ReservationSteps from '../../../src/components/common/ReservationSteps'
import { GetMovieByIDQuery } from '../../../src/queries/movie'
import {
  selectShowtimePageQuery,
  getShowtimeListByMovieQuery,
} from '../../../src/queries/showtime'
import MovieBanner from '../../../src/components/MovieBanner'
import TheaterCard from '../../../src/components/TheaterCard'
import BackButton from '../../../src/components/common/BackButton'
import client from '../../../src/config/initApollo'

const { Title } = Typography

const SelectShowtimePage = (props) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const client = useApolloClient()
  const router = useRouter()
  let { id } = router.query

  const { loading, error, data } = useQuery(getShowtimeListByMovieQuery, {
    variables: { movieID: id, dateString: date },
  })

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />
  if (error)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        {error.message}
      </Title>
    )

  const movie = props.data.getMovieByID
  const theatersMap = new Map()
  const showtimes = data.getShowtimeListByMovie.data

  showtimes.forEach((item) => {
    const theaterID = item.theater._id
    if (theatersMap.has(theaterID)) {
      const obj = theatersMap.get(theaterID)
      theatersMap.set(theaterID, {
        ...obj,
        showtimes: [
          ...obj.showtimes,
          { dateTime: item.dateTime, id: item._id },
        ].sort((a, b) => {
          if (a.dateTime < b.dateTime) return -1
          if (a.dateTime < b.dateTime) return 1
          return 0
        }),
      })
    } else {
      theatersMap.set(theaterID, {
        theater: item.theater,
        language: item.language,
        showtimes: [{ dateTime: item.dateTime, id: item._id }],
      })
    }
  })
  const theaters = Array.from(theatersMap.entries()).sort()

  const onChange = async (date) => {
    if (date) {
      const dateString = date.format('YYYY-MM-DD')
      setDate(dateString)
      await client.query({
        query: getShowtimeListByMovieQuery,
        variables: { movieID: id, dateString },
        fetchPolicy: 'network-only',
      })
    }
  }

  return (
    <>
      <Head
        title={`เลือกรอบฉาย | ${movie.name}`}
        name='select showtime'
        content='select showtime'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <BackButton />
        <ReservationSteps current={0} />
        <MovieBanner movie={movie} />
        <Space direction='vertical' size='small' style={{ width: '100%' }}>
          <Space size='large' align='start'>
            <Title level={1}>รอบฉาย</Title>
            <DatePicker
              onChange={onChange}
              value={moment(date)}
              format='Do MMM YYYY'
              style={{ padding: '0.5rem' }}
            />
          </Space>
          {theaters.length === 0 ? (
            <Empty />
          ) : (
            theaters.map((theater) => (
              <TheaterCard theater={theater[1]} key={theater[0]} />
            ))
          )}
        </Space>
      </Space>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: GetMovieByIDQuery,
    variables: {
      _id: query.id,
    },
  })
  return { props: { data } }
}

export default SelectShowtimePage
