import TaskContainer from '../taskContainer/TaskContainer'
import './tasksection.css'
import '../../style.css'

export default function TaskSection() {
  return (
    <div className="task__section">
      <h1 className='title'>All Task</h1>
      <input type="search" placeholder='Buscar' className='input-search'/>
      <TaskContainer />
      <button type='button' className='btn btn-plus'>+</button>
    </div>
  )
}
