import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import EditFormTask from '../../components/formEdit/EditFormTask'
import './editTask.css'
import { saveEdition } from '../../components/formEdit/EditFormTask'

function EditTask() {
  return (
    <div className="container">
      <div className="container__titleTask">
        <EditFormTask />
      </div>
    </div>
  )
}

export default EditTask
