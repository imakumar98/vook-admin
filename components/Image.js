import React from 'react'

function Image({
    image,
    removeImage

}) {
  return (
    <div className="image text-center">
        
        <div>
            <img src={image} className="img-fluid" width="92px" height="125px"/>
        </div>
        <span onClick={removeImage} value={image} style={{cursor:'pointer',fontSize:'12px'}}>REMOVE</span>
        
        
    </div>
  )
}

export default Image;
