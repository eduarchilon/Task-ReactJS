import React from 'react'
import './Labels.css'

function Labels() {
  return (
    <div className="label__container">
      <ul className="label__list">
        <li className="label-item">
          <a className="label-link" href="#">
            All
          </a>
        </li>
        <li className="label-item">
          <a className="label-link" href="#">
            Groceries
          </a>
        </li>
        <li className="label-item">
          <a className="label-link" href="#">
            College
          </a>
        </li>
        <li className="label-item">
          <a className="label-link" href="#">
            Payments
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Labels
