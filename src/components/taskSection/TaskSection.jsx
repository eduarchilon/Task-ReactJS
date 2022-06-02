import TaskContainer from '../taskContainer/TaskContainer'
import './tasksection.css'
import '../../style.css'
import { Link } from 'react-router-dom'

export default function TaskSection() {
  return (
    <div className="task__section">
      <h1 className="title">All Task</h1>
      <input type="search" placeholder="Buscar" className="input-search" />
      <TaskContainer />

      <Link to="/EditTask">
        <button type="button" className="btn btn-plus">
          +
        </button>
      </Link>
    </div>
  )
}
