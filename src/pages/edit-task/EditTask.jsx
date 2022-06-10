import React from 'react'
import EditFormTask from '../../components/formEdit/EditFormTask'
import './editTask.css'
import { Link } from 'react-router-dom'

function EditTask() {
  return (
    <div className="container">
      <div className="container__titleTask">
        <Link to="/" className="arrow-linktohome">
          <i className="fa-solid fa-arrow-left fa-2xl"></i>{' '}
        </Link>
        <EditFormTask />
      </div>
    </div>
  )
}

export default EditTask
