import React from 'react'
import './editFormTask.css'

const EditFormTask = () => {
  return (
    <div className="container__formTask ">
      <input
        type="text"
        defaultValue="Study for test"
        className="edit-task__title-input"
      />
      <label htmlFor="">
        Label{' '}
        <input type="text" defaultValue="School" className="edit-task__label" />
      </label>

      <label htmlFor="">
        Due Date{' '}
        <input
          type="text"
          defaultValue="16 June, 2022"
          className="edit-task__input"
        />
      </label>
      <hr />
      <label htmlFor="">
        Add a comment <input type="text" className="edit-task__input" />
      </label>
      <hr />
    </div>
  )
}

export default EditFormTask
