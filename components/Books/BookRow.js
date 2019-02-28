import React from 'react'
import Link from 'next/link';
import {getCapitalizedString} from './../../lib/utilFunctions';

function BookRow({book}) {
  return (
    <tr>
        <td># {book.sku}</td>
        <td><img src={book.images[0].src} className="img-fluid" style={{borderRadius:'0',width:'80px',height:'100px'}}></img></td>
        <td>
            <Link href="/book-edit">
                <a>
                    {book.title}
                </a>
            </Link>
        </td>
        <td>{book.author}, {getCapitalizedString(book.publisher.name)}</td>
        <td>{book.mrp}</td>
        <td>{getCapitalizedString(book.category.name)}</td>
        <td>{getCapitalizedString(book.type.name)}</td>
        <td>{book.dateTime}</td>
        <td>
            <Link href="/book"><a>EDIT</a></Link>&nbsp;&nbsp;
            <Link href=""><a>DELETE</a></Link>
        </td>
        
    </tr>
  )
}

export default BookRow
