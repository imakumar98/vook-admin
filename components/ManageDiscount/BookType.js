import React from 'react'

function BookType({type,sno}) {
  return (
    <tr>
        <td>{sno}</td>
        <td>{type.name}</td>
        <td>{type.discount}</td>
        <td>{type.quantity}</td>
    </tr>
  )
}

export default BookType;
