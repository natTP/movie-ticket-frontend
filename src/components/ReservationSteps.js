import { Progress, Steps, Row, Col } from 'antd'
import React from 'react'

const ReservationSteps = ({ current }) => {
  return (
    <Row>
      <Col xs={0} sm={24}>
        <Steps current={current}>
          <Steps.Step title='เลือกรอบฉาย' />
          <Steps.Step title='เลือกที่นั่ง' />
          <Steps.Step title='ชำระเงิน' />
          <Steps.Step title='เสร็จสิ้น' />
        </Steps>
      </Col>
      <Col xs={24} sm={0}>
        <Progress percent={current + 1 * 25} showInfo={false} />
      </Col>
    </Row>
  )
}

export default ReservationSteps
