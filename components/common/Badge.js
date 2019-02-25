import React from 'react'

function Badge({type}) {

  return (
    <label className={'badge badge-'+type}>Fixed</label>
  )
}

export default Badge;
