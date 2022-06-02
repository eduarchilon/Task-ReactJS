import React from 'react'
import './Labels.css'

function Labels(props) {
  const { category } = props
  return (
    <li className="label-item">
      <a href="#" className="label-link">
        {category}
      </a>
    </li>
  )
}

export default Labels
