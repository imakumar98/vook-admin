import Head from 'next/head';

import React from 'react'

function Meta() {
  return (
    <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <title>Vook Order Management</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.0.39/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" ></link>
        <link rel="stylesheet" href="/static/theme.css"></link>
        <link rel="stylesheet" href="/static/nprogress.css"></link>
      </Head>
    
  )
}

export default Meta;
