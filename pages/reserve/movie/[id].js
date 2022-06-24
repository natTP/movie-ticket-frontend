import { useRouter } from 'next/router'
import React from 'react'

const SelectShowtimePage = () => {
  const router = useRouter()
  let { id } = router.query

  return <div>{`SelectShowtimePage: ${id}`}</div>
}

export default SelectShowtimePage
