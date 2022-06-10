import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Labels.css'

function Labels(props) {
  const saveCategory = (e) => {
    props.setCategory(e.target.value)
  }

  const { category } = props
  return (
    <>
      <li className="label-item">
        <button
          value={category}
          onClick={saveCategory}
          to="/"
          className="label-link"
        >
          {category}
        </button>
      </li>
    </>
  )
}

export default Labels
