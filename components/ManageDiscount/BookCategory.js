import React from 'react'

function BookCategory({category,sno}) {
  return (
    <tr>
        <td>{sno}</td>
        <td>{category.name[0].toUpperCase() + category.name.slice(1)}</td>
        <td>{category.discount}</td>
        <td>
           {category.products && category.products.length} 
           {!category.products && 0}
        </td>
        
    </tr>
  )
}

export default BookCategory;
