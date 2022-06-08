import React from 'react'
import TaskSection from '../taskSection/TaskSection'
import './OptionLabel.css'

export default function OptionLabel(props) {
  return (
    <option defaultValue={props.category} value={props.value}>
      <div className="option-label__item">{props.value}</div>
    </option>
  )
}
