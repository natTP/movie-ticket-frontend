import { useQuery } from '@apollo/client'
import { Col, Row, Typography, Spin } from 'antd'
import Head from '../src/components/Head'
import MovieCard from '../src/components/MovieCard'
import { GetMovieListQuery } from '../src/queries/movie'

const { Title } = Typography

const HomePage = () => {
  const { loading, error, data } = useQuery(GetMovieListQuery)

  if (loading) return <Spin tip='กำลังโหลด...' size='large' />
  if (error)
    return (
      <Title level={3} style={{ textAlign: 'center' }}>
        {error.message}
      </Title>
    )

  const movies = data.getMovieList.data

  return (
    <>
      <Head title='Cinema | โรงภาพยนตร์' name='home' content='browse movies' />

      <Title level={1} style={{ textAlign: 'center' }}>
        ภาพยนตร์ที่กำลังฉาย
      </Title>

      <Row gutter={[16, 16]} style={{ paddingTop: '1rem' }}>
        {movies.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={6} key={movie._id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
