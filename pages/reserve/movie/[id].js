import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Typography, Spin, Space, DatePicker } from 'antd'
import Head from '../../../src/components/Head'
import ReservationSteps from '../../../src/components/ReservationSteps'
import { selectShowtimePageQuery } from '../../../src/queries/showtime'
import MovieBanner from '../../../src/components/MovieBanner'
import moment from 'moment'

const { Title } = Typography

const SelectShowtimePage = () => {
  const router = useRouter()
  let { id } = router.query

  const { loading, error, data } = useQuery(selectShowtimePageQuery, {
    variables: { movieID: id },
  })

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />
  if (error)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        {error.message}
      </Title>
    )

  const movie = data.getMovieByID
  const showtimes = data.getShowtimeListByMovie.data

  // TODO : restructure object to
  // locations [ { theaters: [ {showtimes: []} ] }]
  const theaters = []
  const locations = []
  showtimes.forEach((showtime) => {
    // try querying mongo to get the data structure we want from backend
  })

  console.log(showtimes)

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString)
  // }

  return (
    <>
      <Head
        title={`เลือกรอบฉาย | ${movie.name}`}
        name='select showtime'
        content='select showtime'
      />

      <Space direction='vertical' size={32} style={{ width: '100%' }}>
        <ReservationSteps current={0} />
        <MovieBanner movie={movie} />
        <div>
          <Space size='large' align='start'>
            <Title level={1}>รอบฉาย</Title>
            <DatePicker
              placeholder='วันที่'
              defaultValue={moment()}
              format='Do MMM YYYY'
              style={{ padding: '0.5rem' }}
            />
          </Space>
        </div>
      </Space>
    </>
  )
}

export default SelectShowtimePage
