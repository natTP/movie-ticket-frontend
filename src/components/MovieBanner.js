import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Card, Col, Collapse, Row, Typography } from 'antd'
import { cyan } from '@ant-design/colors'
import { ClockCircleOutlined } from '@ant-design/icons'
import { formatDate, ISOStringtoTime } from '../utils/dateTimeUtils'
import InfoDisplay from './common/InfoDisplay'

const { Text, Title } = Typography

const Container = styled.div`
  margin-top: 1rem;
`

const MovieBanner = ({
  movie,
  theater,
  language,
  dateTime,
  seats,
  price,
  refCode,
}) => {
  return (
    <Row>
      <Col xs={24} sm={6}>
        <Image
          src={movie.poster}
          alt={movie.name}
          width='485px'
          height='728px'
          layout='responsive'
          priority
          style={{ borderRadius: '16px' }}
        />
      </Col>
      <Col xs={24} sm={18}>
        <Card bordered={false} style={{ height: '100%', borderRadius: '16px' }}>
          <Text style={{ color: cyan[5] }}>
            เข้าฉาย {formatDate(movie.releaseDate)}
          </Text>
          <Title level={2} style={{ marginTop: '0.25rem' }}>
            {movie.name}
          </Title>
          <Text type='secondary'>
            {movie.genre.join(' · ')}{' '}
            <span style={{ margin: '0rem 0.25rem 0rem 0.25rem' }}>|</span>{' '}
            {language && (
              <>
                {language}{' '}
                <span style={{ margin: '0rem 0.25rem 0rem 0.25rem' }}>|</span>{' '}
              </>
            )}
            <ClockCircleOutlined /> {movie.duration} นาที
          </Text>

          {movie.synopsis && (
            <Collapse
              bordered={false}
              style={{ marginTop: '2rem' }}
              defaultActiveKey={0}
            >
              <Collapse.Panel header='เรื่องย่อ'>
                <Text>{movie.synopsis}</Text>
              </Collapse.Panel>
            </Collapse>
          )}

          <Container>
            <Row style={{ margin: 0 }}>
              <Col xs={24} md={12}>
                {theater && (
                  <InfoDisplay
                    heading='โรงภาพยนตร์'
                    content={`${theater.location} - ${theater.name}`}
                  />
                )}

                {dateTime && (
                  <InfoDisplay
                    heading='รอบฉาย'
                    content={`${formatDate(dateTime)} เวลา ${ISOStringtoTime(
                      dateTime
                    )} น.`}
                  />
                )}

                {seats && (
                  <InfoDisplay heading='ที่นั่ง' content={seats.join(', ')} />
                )}
                {price && (
                  <InfoDisplay heading='ราคารวม' content={`${price} บาท`} />
                )}
              </Col>

              <Col xs={24} md={12}>
                {refCode && (
                  <InfoDisplay heading='Reference Code' content={refCode} />
                )}
              </Col>
            </Row>
          </Container>
        </Card>
      </Col>
    </Row>
  )
}

export default MovieBanner
