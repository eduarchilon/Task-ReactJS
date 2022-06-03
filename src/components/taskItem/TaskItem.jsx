import React from 'react'
import './taskitem.css'
import { Link } from 'react-router-dom'

function TaskItem(props) {
  const { title, due_date, labels } = props
  return (
    <div className="taskitem__container">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="checkbox-style"
      />

      <div className="taskitem__content">
        <div className="task-text__container">
          <div>
            <h4 className="task-title">{title}</h4>
            <p className="task-date">Due date: {due_date}</p>
          </div>
          <div>
            <span className="btn-label">{labels}</span>
          </div>
        </div>

        <div className="task-buton__container">
          <Link to="/EditTask">
            <button className="edit-btn">
              <i
                className="fas fa-edit fa-edit fa-xl"
                style={{ color: '#8E8E8E' }}
              ></i>
            </button>
          </Link>

          <button className="delete-btn">
            <i className="fas fa-trash-alt fa-delete fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
