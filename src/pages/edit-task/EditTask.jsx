import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import './editTask.css'

function EditTask() {
  return (
    <div className="container">
      <h1>Edit Task</h1>
      <form action="">
        <label htmlFor="">Label</label>
        <input type="text" />

        <hr />
        <label htmlFor="">Add a comment</label>
        <hr />
      </form>

      <Buttons />
    </div>
  )
}

export default EditTask
