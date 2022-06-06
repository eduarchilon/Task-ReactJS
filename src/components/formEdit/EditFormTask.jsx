import React from 'react'
import { Link } from 'react-router-dom'
import './editFormTask.css'
import { getAllLabels } from '../../services/services'
import OptionLabel from '../optionLabel/OptionLabel'
import DateSetter from '../dateSetter/DateSetter'

const EditFormTask = () => {
  const Categories = getAllLabels()

  return (
    <div className="container__formTask ">
      <div className="edit__title-container">
        <Link to="/">
          <i className="fa-solid fa-arrow-left fa-2xl"></i>{' '}
        </Link>
        <input
          type="text"
          defaultValue="Study for test"
          className="edit-task__title-input"
        />
      </div>

      <div>
        <label htmlFor="labelSelect" className="edit__instruction">
          {' '}
          Label
        </label>
        <div className="select__container ">
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
      </div>

      <label htmlFor="" className="edit__instruction">
        Due Date
        <DateSetter />
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
