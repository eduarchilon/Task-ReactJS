import React from 'react'
import './taskitem.css'

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
        <div className="tast-text__container">
          <h4 className="task-title">{title}</h4>
          <p className="task-date">Due date: {due_date}</p>
        </div>
        <span className="btn-label">{labels}</span>
        <div className="task-buton__container">
          <button className="edit-btn">
            <i className="fas fa-edit fa-edit fa-xl"></i>
          </button>
          <button className="edit-btn">
            <i className="fas fa-trash-alt fa-delete fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
