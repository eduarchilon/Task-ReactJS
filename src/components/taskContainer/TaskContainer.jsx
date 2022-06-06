import React from 'react'
import TaskItem from '../taskItem/TaskItem'
import { GetAllTasks } from '../../services/services'
import './TaskContainer.css'
import GetTasksFromApi from '../../services/services'

function TaskContainer() {
  const TasksApi = GetTasksFromApi()
  console.log(TasksApi)
  const AllTasks = GetAllTasks()
  return (
    <div className="alltask__container">
      {AllTasks.map(({ id, title, message, due_date, labels }) => {
        return (
          <TaskItem
            key={id}
            title={title}
            due_date={due_date}
            labels={labels}
          />
        )
      })}
    </div>
  )
}

export default TaskContainer
