import React from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const BackButton = () => {
  const router = useRouter()

  return (
    <Button icon={<LeftOutlined />} onClick={() => router.back()}>
      กลับ
    </Button>
  )
}

export default BackButton
