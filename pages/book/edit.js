import React from 'react'
import Edit from './../../components/Books/Edit';

function edit(props) {
  return (
    <Edit bookId={props.query.id} />
  )
}

export default edit;
