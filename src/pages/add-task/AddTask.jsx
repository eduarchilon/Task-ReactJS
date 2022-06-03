import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import EditFormTask from '../../components/formEdit/EditFormTask'
import { Link } from 'react-router-dom'

function AddTask() {
  return (
    <div className="container">
      <div className="container__titleTask">
        <Link to="/">
          <i className="fa-solid fa-arrow-left fa-2xl"></i>{' '}
        </Link>
        <EditFormTask />
      </div>

      <Buttons />
    </div>
  )
}

export default AddTask
