import React from 'react'

function BookCategory({category,sno}) {
  return (
    <tr>
        <td>{sno}</td>
        <td>{category.name[0].toUpperCase() + category.name.slice(1)}</td>
        
        <td>
           {category.books && category.books.length} 
           {!category.books && 0}
        </td>
        
    </tr>
  )
}

export default BookCategory;
