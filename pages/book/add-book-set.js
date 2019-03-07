import React from 'react'
import AddBookSet from '../../components/Books/AddBookSet';
import Head from 'next/head';

function addBookSet() {
  return (
    <div>
      <Head>
        <title>Add Book Set | Vook</title>
      </Head>
      <AddBookSet/>
    </div>
    
  )
}

export default addBookSet;
