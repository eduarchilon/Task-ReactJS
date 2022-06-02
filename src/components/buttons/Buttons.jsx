import React from 'react'
import './buttons.css'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <div className="container__buttons">
      <Link to="/">
        <button className="btnCancel">Cancel</button>
      </Link>

      <Link to="/">
        <button className="btnSave">Save</button>
      </Link>
    </div>
  )
}

export default Buttons
