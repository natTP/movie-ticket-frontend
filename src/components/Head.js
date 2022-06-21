import React from 'react'
import Head from 'next/head'

const MyHead = ({ title, name, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default MyHead
