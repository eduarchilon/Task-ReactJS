import React, { useState } from 'react'
import DateSetter from '../dateSetter/DateSetter'
import Buttons from '../buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import './formCreateTask.css'

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

    fetch(
      'https://629df86a3dda090f3c107c4d.mockapi.io/results',
      requestOptions
    ).then((response) => response.json())
    navigate(`/`)
  }

  return (
    <div className="container__createTask">
      <div className="container__formTask">
        <input
          type="text"
          defaultValue="Untitled"
          className="edit-task__title-input"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="">
          Label{' '}
          <div className="create__label-container">
            <input
              type="text"
              defaultValue="Empty"
              className="create__label-input"
              onChange={(event) => setLabel(event.target.value)}
            />
          </div>
        </label>

        <label htmlFor="">
          Due Date{' '}
          <div className="datesetter__container">
            <DateSetter
              onChange={(newDate) => {
                const formatDate = format(newDate, 'dd/MM/yyyy')
                setDate(formatDate)
              }}
            />
          </div>
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
        <div className="container__buttonsCreateTask">
          <Buttons event={onHandleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default FormCreateTask
