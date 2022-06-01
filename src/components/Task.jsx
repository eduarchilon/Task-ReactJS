import './Task.css'

export default function Task() {
  return (
    <div className="task">
      <div className="task__flex-container">
        <h1 className="task__title">Cooking a Salmon sushi</h1>
        <div className="task__labels-container">Labels container</div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <p className="task__date-limit">Due date: 12/05/2022</p>
    </div>
  )
}
