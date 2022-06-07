import React, { useState, useEffect } from 'react'
import TaskItem from '../taskItem/TaskItem'
import './TaskContainer.css'

export const url = 'https://629df86a3dda090f3c107c4d.mockapi.io/'

function TaskContainer() {
  const [all, setAll] = useState([])

  const getAll = async () => {
    const data = await fetch(`${url}results`)
    const resultAll = await data.json()
    setAll(resultAll)
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className="alltask__container">
      {all.map(({ id, name, message, date, category }) => {
        return (
          <TaskItem
            key={id}
            id={id}
            name={name}
            date={date}
            category={category}
          />
        )
      })}
    </div>
  )
}

export default TaskContainer
