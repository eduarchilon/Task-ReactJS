import React from 'react'
import './buttons.css'

const Buttons = ({ event }) => {
  return (
    <div className="container__buttons">
      <button className="btnCancel">Cancel</button>

      <button className="btnSave" onClick={event}>
        Save
      </button>
    </div>
  )
}

export default Buttons
