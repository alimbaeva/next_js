import Head from 'next/head'
import React from 'react'

type Props = {}

const Error = (props: Props) => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="Error" key="title" />      
      </Head>
      <h1>Error 404</h1>
    </>
  )
}

export default Error