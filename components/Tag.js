import React from 'react'

function Tag({
    tag,
    removeTag

}) {
  return (
    <div className="tag">
        <span>{tag} &nbsp;</span>
        <span onClick={removeTag} name="tag" value={tag} style={{cursor:'pointer'}}>&times;</span>
    </div>
  )
}

export default Tag;
