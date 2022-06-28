import { Modal } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'

const LoginModal = ({ visible, onCancel }) => {
  const router = useRouter()

  return (
    <Modal
      title='คุณยังไม่ได้เข้าสู่ระบบ'
      visible={visible}
      centered
      onOk={() => router.push('/login')}
      onCancel={onCancel}
      okText='เข้าสู่ระบบ'
    >
      กรุณาเข้าสู่ระบบเพื่อชำระค่าตั๋วภาพยนตร์
    </Modal>
  )
}

export default LoginModal
