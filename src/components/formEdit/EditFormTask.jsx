import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './editFormTask.css'
import DateSetter from '../dateSetter/DateSetter'
import { url } from '../taskContainer/TaskContainer'
import { format } from 'date-fns'
import Buttons from '../buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import Multiselect from 'multiselect-react-dropdown'

const EditFormTask = () => {
  const [task, setTask] = useState({})
  const [labels, setLabels] = useState([])
  const { id } = useParams()
  const [name, setTitle] = useState(task.name)
  const [category, setLabel] = useState(task.category)
  const [date, setDate] = useState(task.date)
  const [message, setMessage] = useState(task.message)
  const navigate = useNavigate()

  const getTask = async () => {
    const results = await fetch(`${url}results/${id}`)
    const result = await results.json()
    setTask(result)
  }

  const saveEdition = (event) => {
    fetch(`https://629df86a3dda090f3c107c4d.mockapi.io/results/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        date: date,
        category: category,
        message: message,
      }),
    }).then((res) => res.json())
    navigate(`/`)
  }

  useEffect(() => {
    getTask()
  }, [])

  const getAllLabels = async () => {
    const results = await fetch(`${url}results`)
    const allResults = await results.json()
    const categories = allResults.map((element) => element.category)
    return setLabels(categories)
  }

  useEffect(() => {
    getAllLabels()
  }, [])

  const filteredLabels = []
  labels.forEach((element) => {
    if (!filteredLabels.includes(element)) {
      filteredLabels.push(element)
    }
  })

  return (
    <div className="container__createTask">
      <div className="container__formTask ">
        <div className="edit__title-container">
          <input
            type="text"
            defaultValue={task.name}
            className="edit-task__title-input"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="labelSelect" className="edit__instruction">
            {' '}
            Label
          </label>
          <div className="select__container ">
            <Multiselect
              isObject={false}
              onSelect={(event) => {
                setLabel(event[0])
              }}
              options={filteredLabels.map((label) => label)}
              selectedValues={[task.category]}
              placeholder=""
              singleSelect="true"
              /* showCheckbox */
              style={{
                chips: {
                  background: '#ea5959',
                  width: '115px',
                  padding: '5px',
                  'border-radius': '5px',
                  'font-family': 'Lato',
                  'justify-content': 'center',
                  color: 'var(--text-white)',
                },
                multiselectContainer: {},
                searchBox: {
                  border: 'none',
                },
                optionContainer: {
                  background: '#F3F3F3',
                },
                option: {
                  background: '#ea5959',
                  width: '115px',
                  padding: '5px',
                  'font-family': 'Lato',
                  'justify-content': 'center',
                  margin: '5px',
                  'border-radius': '5px',
                  color: 'var(--text-white)',
                  'text-align': 'center',
                  'font-size': '13px',
                },
              }}
            />
          </div>
        </div>

        <label htmlFor="" className="edit__instruction">
          Due Date
          <div className="datesetter__container">
            <DateSetter
              onChange={(newDate) => {
                const formatDate = format(newDate, 'dd/MM/yyyy')
                setDate(formatDate)
              }}
              dueDate={task.date}
            />
          </div>
        </label>
        <hr className="edit-hr" />
        <label htmlFor="" className="edit__instruction">
          Add a comment{' '}
          <input
            type="text"
            className="edit-task__input"
            defaultValue={task.message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <hr className="edit-hr" />
        <div className="container__buttonsCreateTask">
          <Buttons event={saveEdition} />
        </div>
      </div>
    </div>
  )
}

export default EditFormTask
