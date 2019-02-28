import React from 'react'
import {getCapitalizedString} from './../../lib/utilFunctions';

function BookType({type,sno}) {
  return (
    <tr>
        <td>{sno}</td>
        <td>{getCapitalizedString(type.name) || ''}</td>
        <td>
        {type.books && type.books.length} 
           {!type.books && 0}
        </td>
    </tr>
  )
}

export default BookType;
