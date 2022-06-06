import React, { useState, useEffect } from 'react'
import TaskItem from '../taskItem/TaskItem'
import './TaskContainer.css'

const url = 'https://629df86a3dda090f3c107c4d.mockapi.io/'

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
      {all.map(({ id, title, message, due_date, label }) => {
        return (
          <TaskItem key={id} id={id} title={title} due_date={due_date} labels={label} />
        )
      })}
    </div>
  )
}

export default TaskContainer
