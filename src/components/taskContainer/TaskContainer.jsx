import TaskItem from '../taskItem/TaskItem'
import './TaskContainer.css'

export const url = 'https://629df86a3dda090f3c107c4d.mockapi.io/'

function TaskContainer({ prop }) {
  return (
    <div className="alltask__container">
      {prop.map(({ id, name, message, date, category, completed }) => {
        return (
          <TaskItem
            key={id}
            id={id}
            name={name}
            date={date}
            message={message}
            category={category}
            completed={completed}
          />
        )
      })}
    </div>
  )
}

export default TaskContainer
