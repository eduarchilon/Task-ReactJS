import React from 'react'
import './editFormTask.css'

const EditFormTask = () => {
  return (
    <div className="container__formTask ">
      <input
        type="text"
        defaultValue="Cooking a salmon sushi"
        className="edit-task__title-input"
      />
      <label htmlFor="">
        Label{' '}
        <input
          type="text"
          defaultValue="Groceries"
          className="edit-task__input"
        />
      </label>

      <label htmlFor="">
        Due Date{' '}
        <input
          type="text"
          defaultValue="30 May, 2022"
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
