import React, { useEffect, useState } from 'react'
import './taskitem.css'
import { Link } from 'react-router-dom'
import { set } from 'date-fns'

function TaskItem(props) {
  const { id, name, date, category, completed } = props

  const [isCompleted, setIsCompleted] = useState(completed)
  const [isLate, setIsLate] = useState(false)

  const changeCompleted = (event) => {
    const checked = event.target.checked
    fetch(`https://629df86a3dda090f3c107c4d.mockapi.io/results/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: checked }),
    }).then((res) => res.json())
  }
  const isDateOk = () => {
    const fechaDeTask = new Date(props.date)
    const fechaActual = new Date()
    if (fechaDeTask < fechaActual) {
      setIsLate(true)
    } else {
      setIsLate(false)
    }
  }

  useEffect(() => {
    isDateOk()
  })

  useEffect(() => {
    setIsCompleted()
  }, [])

  const removeTask = () => {
    const idTask = document.getElementById(id)

    fetch(`https://629df86a3dda090f3c107c4d.mockapi.io/results/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json())

    idTask.classList.add('remove')
  }

  return (
    <div className="taskitem__container" id={id}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="checkbox-style"
        defaultChecked={isCompleted}
        onChange={changeCompleted}
      />

      <div className={isLate ? 'taskitem__late' : 'taskitem__content'}>
        <div className="task-text__container">
          <div className="task-titlelabel__container">
            <p className="task-title">{name}</p>
            <div>
              <span className="btn-label">{category}</span>
            </div>
          </div>
          <p className="task-date">Due date: {date}</p>
        </div>

        <div className="task-buton__container">
          <Link to={`/EditTask/${id}`}>
            <button className="edit-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5658 2.34064C23.7176 2.49294 23.8029 2.69922 23.8029 2.91426C23.8029 3.12931 23.7176 3.33559 23.5658 3.48789L21.8709 5.18439L18.6209 1.93439L20.3158 0.237889C20.4681 0.0855688 20.6748 0 20.8902 0C21.1057 0 21.3123 0.0855688 21.4646 0.237889L23.5658 2.33901V2.34064ZM20.722 6.33164L17.472 3.08164L6.4009 14.1544C6.31147 14.2438 6.24414 14.3529 6.20428 14.4729L4.89615 18.3956C4.87243 18.4672 4.86906 18.5439 4.88642 18.6172C4.90379 18.6905 4.9412 18.7575 4.99448 18.8108C5.04775 18.8641 5.1148 18.9015 5.18812 18.9189C5.26144 18.9362 5.33814 18.9329 5.40965 18.9091L9.3324 17.601C9.45227 17.5616 9.56132 17.4949 9.6509 17.406L20.722 6.33326V6.33164Z"
                  fill="#8E8E8E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 21.1256C0 21.7721 0.256807 22.3921 0.713927 22.8492C1.17105 23.3063 1.79103 23.5631 2.4375 23.5631H20.3125C20.959 23.5631 21.579 23.3063 22.0361 22.8492C22.4932 22.3921 22.75 21.7721 22.75 21.1256V11.3756C22.75 11.1602 22.6644 10.9535 22.512 10.8011C22.3597 10.6487 22.153 10.5631 21.9375 10.5631C21.722 10.5631 21.5153 10.6487 21.363 10.8011C21.2106 10.9535 21.125 11.1602 21.125 11.3756V21.1256C21.125 21.3411 21.0394 21.5478 20.887 21.7002C20.7347 21.8525 20.528 21.9381 20.3125 21.9381H2.4375C2.22201 21.9381 2.01535 21.8525 1.86298 21.7002C1.7106 21.5478 1.625 21.3411 1.625 21.1256V3.25064C1.625 3.03515 1.7106 2.82849 1.86298 2.67612C2.01535 2.52374 2.22201 2.43814 2.4375 2.43814H13C13.2155 2.43814 13.4222 2.35254 13.5745 2.20017C13.7269 2.04779 13.8125 1.84113 13.8125 1.62564C13.8125 1.41015 13.7269 1.20349 13.5745 1.05112C13.4222 0.898743 13.2155 0.813141 13 0.813141H2.4375C1.79103 0.813141 1.17105 1.06995 0.713927 1.52707C0.256807 1.98419 0 2.60418 0 3.25064V21.1256Z"
                  fill="#8E8E8E"
                />
              </svg>
            </button>
          </Link>

          <button className="delete-btn" onClick={removeTask} id="btnDel">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.84615 1.6C1.35652 1.6 0.886947 1.76857 0.540726 2.06863C0.194505 2.36869 0 2.77565 0 3.2V4.8C0 5.22435 0.194505 5.63131 0.540726 5.93137C0.886947 6.23143 1.35652 6.4 1.84615 6.4H2.76923V20.8C2.76923 21.6487 3.15824 22.4626 3.85068 23.0627C4.54312 23.6629 5.48228 24 6.46154 24H17.5385C18.5177 24 19.4569 23.6629 20.1493 23.0627C20.8418 22.4626 21.2308 21.6487 21.2308 20.8V6.4H22.1538C22.6435 6.4 23.1131 6.23143 23.4593 5.93137C23.8055 5.63131 24 5.22435 24 4.8V3.2C24 2.77565 23.8055 2.36869 23.4593 2.06863C23.1131 1.76857 22.6435 1.6 22.1538 1.6H15.6923C15.6923 1.17565 15.4978 0.768687 15.1516 0.468629C14.8054 0.168571 14.3358 0 13.8462 0L10.1538 0C9.66422 0 9.19464 0.168571 8.84842 0.468629C8.5022 0.768687 8.30769 1.17565 8.30769 1.6H1.84615ZM7.38462 8C7.62943 8 7.86422 8.08429 8.03733 8.23431C8.21044 8.38434 8.30769 8.58783 8.30769 8.8V20C8.30769 20.2122 8.21044 20.4157 8.03733 20.5657C7.86422 20.7157 7.62943 20.8 7.38462 20.8C7.1398 20.8 6.90501 20.7157 6.7319 20.5657C6.55879 20.4157 6.46154 20.2122 6.46154 20V8.8C6.46154 8.58783 6.55879 8.38434 6.7319 8.23431C6.90501 8.08429 7.1398 8 7.38462 8ZM12 8C12.2448 8 12.4796 8.08429 12.6527 8.23431C12.8258 8.38434 12.9231 8.58783 12.9231 8.8V20C12.9231 20.2122 12.8258 20.4157 12.6527 20.5657C12.4796 20.7157 12.2448 20.8 12 20.8C11.7552 20.8 11.5204 20.7157 11.3473 20.5657C11.1742 20.4157 11.0769 20.2122 11.0769 20V8.8C11.0769 8.58783 11.1742 8.38434 11.3473 8.23431C11.5204 8.08429 11.7552 8 12 8ZM17.5385 8.8V20C17.5385 20.2122 17.4412 20.4157 17.2681 20.5657C17.095 20.7157 16.8602 20.8 16.6154 20.8C16.3706 20.8 16.1358 20.7157 15.9627 20.5657C15.7896 20.4157 15.6923 20.2122 15.6923 20V8.8C15.6923 8.58783 15.7896 8.38434 15.9627 8.23431C16.1358 8.08429 16.3706 8 16.6154 8C16.8602 8 17.095 8.08429 17.2681 8.23431C17.4412 8.38434 17.5385 8.58783 17.5385 8.8Z"
                fill="#EA5959"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
