import React from 'react'
import Link from 'next/link';
import {getCapitalizedString, getDateFromDateTime} from './../../lib/utilFunctions';
import BookDeleteModal from './BookDeleteModal';
import Switch from './../common/Switch';


function BookRow({book}) {
  return (
    <tr>
        <td># {book.sku}</td>
        <td><img src={book.images[0].src} className="img-fluid" style={{borderRadius:'0',width:'92px',height:'125px'}}></img></td>
        <td>
            <Link href="/book-edit">
                <a>
                    {book.title}
                </a>
            </Link>
        </td>
        <td>{book.author}, {getCapitalizedString(book.publisher.name)}</td>
        {/* <td><Switch/></td> */}
        <td>&#8377;{book.mrp}</td>
        <td>{getCapitalizedString(book.category.name)}</td>
        
        <td>{getDateFromDateTime(book.dateTime)}</td>
        <td>
            
            <Link href={'/book/edit?id='+book.id}><a>UPDATE</a></Link>&nbsp;&nbsp;
            <br/><br/>
            <BookDeleteModal bookId={book.id}/>
            
            
        </td>
        
    </tr>
  )
}

export default BookRow
