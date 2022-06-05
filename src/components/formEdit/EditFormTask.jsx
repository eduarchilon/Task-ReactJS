import React from 'react'
import './editFormTask.css'
import { getAllLabels } from '../../services/services'
import OptionLabel from '../optionLabel/OptionLabel'

const EditFormTask = () => {
  const Categories = getAllLabels()

  return (
    <div className="container__formTask ">
      <input
        type="text"
        defaultValue="Study for test"
        className="edit-task__title-input"
      />
      {/* <label htmlFor="">
        Label{' '}
        <input type="text" defaultValue="School" className="edit-task__label" />
      </label> */}

      <div>
        <label htmlFor="labelSelect" className="edit__instruction">
          {' '}
          Label
        </label>
        <select
          name="label-select"
          id="labelSelect"
          className="edit__label-select"
        >
          {Categories.map((category, index) => {
            return <OptionLabel key={index} value={category} />
          })}
        </select>
      </div>

      <label htmlFor="" className="edit__instruction">
        Due Date{' '}
        <input
          type="text"
          defaultValue="16 June, 2022"
          className="edit-task__input"
        />
      </label>
      <hr />
      <label htmlFor="" className="edit__instruction">
        Add a comment <input type="text" className="edit-task__input" />
      </label>
      <hr />
    </div>
  )
}

export default EditFormTask
