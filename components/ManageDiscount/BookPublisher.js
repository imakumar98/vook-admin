import React from 'react'

function BookPublisher({publisher,sno}) {
  return (
    <tr>
        <td>{sno}</td>
        <td>{publisher.name}</td>
        <td>{publisher.discount}</td>
        <td>{publisher.quantity}</td>
    </tr>
  )
}

export default BookPublisher;
