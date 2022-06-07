import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './editFormTask.css'
import OptionLabel from '../optionLabel/OptionLabel'
import DateSetter from '../dateSetter/DateSetter'
import { url } from '../taskContainer/TaskContainer'

const EditFormTask = () => {
  const [task, setTask] = useState({})
  const { id } = useParams()
  console.log(id)

  const getTask = async () => {
    const results = await fetch(`${url}results/${id}`)
    const result = await results.json()
    setTask(result)
  }

  useEffect(() => {
    getTask()
  }, [])

  return (
    <div className="container__formTask ">
      <div className="edit__title-container">
        <Link to="/">
          <i className="fa-solid fa-arrow-left fa-2xl"></i>{' '}
        </Link>
        <input
          type="text"
          value={task.name}
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
            <option>{task.category}</option>
          </select>
        </div>
      </div>

      <label htmlFor="" className="edit__instruction">
        Due Date
        <DateSetter />
      </label>
      <hr />
      <label htmlFor="" className="edit__instruction">
        Add a comment{' '}
        <input type="text" className="edit-task__input" value={task.message} />
      </label>
      <hr />
    </div>
  )
}

export default EditFormTask
