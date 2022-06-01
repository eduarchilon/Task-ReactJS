import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import EditFormTask from '../../components/formEdit/EditFormTask'
import './editTask.css'

function EditTask() {
  return (
    <div className="container">
      <div className="container__titleTask">
        <i class="fa-solid fa-arrow-left fa-2xl"></i>
        <EditFormTask />
      </div>

      <Buttons />
    </div>
  )
}

export default EditTask
