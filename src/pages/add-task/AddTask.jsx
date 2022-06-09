import React from 'react'
import FormCreateTask from '../../components/formCreateTask/formCreateTask'
import { Link } from 'react-router-dom'
import './addtask.css'

function AddTask() {
  return (
    <div className="container">
      <div className="container__titleTask">
        <Link to="/" className="arrow-linktohome">
          <i className="fa-solid fa-arrow-left fa-2xl"></i>{' '}
        </Link>
        <FormCreateTask />
      </div>
    </div>
  )
}

export default AddTask
