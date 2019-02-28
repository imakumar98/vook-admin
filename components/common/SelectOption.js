import React from 'react'
import {getCapitalizedString} from './../../lib/utilFunctions';

export default function SelectOption({value,text}) {
  return (
    <option value={value}>{getCapitalizedString(text)}</option>
  )
}
