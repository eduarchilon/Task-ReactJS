import React from 'react'
import { Link } from 'react-router-dom'
import './Labels.css'

function Labels(props) {
  const { category } = props
  return (
    <>
    <li className="label-item">
      <Link to="#" className="label-link">
        {category}
      </Link>
    </li>
    </>
  )
}

export default Labels
