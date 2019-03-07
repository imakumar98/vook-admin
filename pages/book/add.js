import React from 'react'
import Add from './../../components/Books/Add';
import Head from 'next/head';

function add() {
  return (
    <div>
      <Head>
        <title>Add Book | Vook</title>
      </Head>
      <Add/>
    </div>
    
  )
}

export default add;
