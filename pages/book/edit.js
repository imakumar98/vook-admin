import React from 'react'
import Edit from './../../components/Books/Edit';
import Head from 'next/head';

function edit(props) {
  return (
    <div>
      <Head>
        <title>Update Book | Vook</title>
      </Head>
      <Edit bookId={props.query.id} />
    </div>
    
  )
}

export default edit;
