import React from 'react'
import './OptionLabel.css'

export default function OptionLabel(props) {
  return (
    <option value={props.value}>
      <div className="option-label__item">{props.value}</div>
    </option>
  )
}
