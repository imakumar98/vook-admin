import React from 'react'
import {getCapitalizedString} from './../../lib/utilFunctions';

function BookPublisher({publisher,sno}) {
  return (
    <tr>
        <td>{sno}</td>
        <td>{getCapitalizedString(publisher.name)}</td>
        <td>{publisher.discount + '%'}</td>
        <td>
            {publisher.books && publisher.books.length} 
            {!publisher.books && 0}
        </td>
    </tr>
  )
}

export default BookPublisher;
