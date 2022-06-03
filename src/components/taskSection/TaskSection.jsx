import TaskContainer from '../taskContainer/TaskContainer'
import './tasksection.css'
import '../../style.css'
import { Link } from 'react-router-dom'

export default function TaskSection() {
  return (
    <div className="task__section">
      <div>
        <h1 className="title">All Task</h1>
        <input type="search" placeholder="Search" className="input-search" />
      </div>
      <div>
        <TaskContainer />
      </div>

      <Link to="/AddTask">
        <button type="button" className="btn-plus">
          <span>+</span>
        </button>
      </Link>
    </div>
  )
}
