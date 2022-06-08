import React, { useState } from 'react'
import DateSetter from '../dateSetter/DateSetter'
import { Link } from 'react-router-dom'
import Buttons from '../buttons/Buttons'
import { useNavigate } from 'react-router-dom'

const FormCreateTask = () => {
  const [name, setTitle] = useState('')
  const [category, setLabel] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const onHandleSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: '1', name, category, date, message }),
    }

    fetch('https://629df86a3dda090f3c107c4d.mockapi.io/results', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
    navigate(`/`)
  }

  return (
    <>
      <form className="container__formTask">
        <input
          type="text"
          defaultValue="Untitled"
          className="edit-task__title-input"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="">
          Label{' '}
          <input
            type="text"
            defaultValue="Empty"
            className="edit-task__label"
            onChange={(event) => setLabel(event.target.value)}
          />
        </label>

        <label htmlFor="">
          Due Date <DateSetter />
        </label>
        <hr />
        <label htmlFor="">
          Add a comment{' '}
          <input
            type="text"
            className="edit-task__input"
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <hr />
        <Buttons event={onHandleSubmit} />
      </form>
    </>
  )
}

export default FormCreateTask
