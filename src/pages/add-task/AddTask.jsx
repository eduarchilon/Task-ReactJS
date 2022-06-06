import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import FormCreateTask from '../../components/formCreateTask/formCreateTask'
import { Link } from 'react-router-dom'

function AddTask() {
  return (
    <div className="container">
      <div className="container__titleTask">
        <Link to="/">
          <i className="fa-solid fa-arrow-left fa-2xl"></i>{' '}
        </Link>
        <FormCreateTask />
      </div>

      {/* <Buttons /> */}
    </div>
  )
}

export default AddTask
