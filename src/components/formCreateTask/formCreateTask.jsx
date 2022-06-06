import React from 'react'
import DateSetter from '../dateSetter/DateSetter'

const FormCreateTask = () => {
  return (
    <div className="container__formTask ">
      <input
        type="text"
        defaultValue="Untitled"
        className="edit-task__title-input"
      />
      <label htmlFor="">
        Label{' '}
        <input type="text" defaultValue="Empty" className="edit-task__label" />
      </label>

      <label htmlFor="">
        Due Date <DateSetter />
      </label>
      <hr />
      <label htmlFor="">
        Add a comment <input type="text" className="edit-task__input" />
      </label>
      <hr />
    </div>
  )
}

export default FormCreateTask
