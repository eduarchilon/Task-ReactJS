import React from 'react'
import './taskitem.css'

function TaskItem() {
  return (
    <div className='taskitem__container'>
        <input type="checkbox" name="checkbox" id="checkbox" className='checkbox-style'/>
        <div className='taskitem__content'>
            <div className='tast-text__container'>
                <h4 className='task-title'>Cooking a salmon sushi</h4>
                <p className='task-date'>Due date: 12/05/2022</p>
            </div>
            <button type='button' className='btn-label'>Groceries</button>
            <div className='task-buton__container'>
            <i className='fas fa-edit fa-edit'></i>
            <i className='fas fa-trash-alt fa-delete'></i>
            </div> 
        </div>
    </div>
  )
}

export default TaskItem