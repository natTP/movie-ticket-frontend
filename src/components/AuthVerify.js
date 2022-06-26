import React from 'react'
import client from '../config/initApollo'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getToken, parseJWT } from '../utils/jwtUtils'

const AuthVerify = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleRouteChange = (url) => {
      const token = getToken()
      if (token) {
        const decoded = parseJWT(token)
        if (decoded.exp * 1000 < Date.now()) {
          dispatch({ type: 'logout' })
          client.clearStore()
        }
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <></>
}

export default AuthVerify
