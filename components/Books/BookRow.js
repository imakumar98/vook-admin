import React from 'react'
import Link from 'next/link';

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
        <td>{book.author}, {book.publisher}</td>
        <td>{book.mrp}</td>
        <td>{book.category}</td>
        <td>{book.type}</td>
        <td>21-10-2018</td>
        <td>
            <Link href="/book"><a>EDIT</a></Link>&nbsp;&nbsp;
            <Link href=""><a>DELETE</a></Link>
        </td>
        
    </tr>
  )
}

export default BookRow
