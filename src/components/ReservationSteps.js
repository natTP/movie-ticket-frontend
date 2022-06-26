import { Steps } from 'antd'
import React from 'react'

const ReservationSteps = ({ current }) => {
  return (
    <Steps current={current}>
      <Steps.Step title='เลือกรอบฉาย' />
      <Steps.Step title='เลือกที่นั่ง' />
      <Steps.Step title='ชำระเงิน' />
      <Steps.Step title='เสร็จสิ้น' />
    </Steps>
  )
}

export default ReservationSteps
