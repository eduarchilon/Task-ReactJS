import React from 'react'
import './buttons.css'
import { useNavigate } from 'react-router'

const Buttons = ({ event }) => {
  const navigate = useNavigate()
  const returnHome = () => {
    navigate(`/`)
  }

  return (
    <div className="container__buttons">
      <button className="btnCancel" onClick={returnHome}>
        Cancel
      </button>

      <button className="btnSave" onClick={event}>
        Save
      </button>
    </div>
  )
}

export default Buttons
