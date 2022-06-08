import TaskContainer from '../taskContainer/TaskContainer'
import './tasksection.css'
import '../../style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { set } from 'date-fns'

const url = 'https://629df86a3dda090f3c107c4d.mockapi.io/'

export default function TaskSection() {

  const [search, setSearch] = useState('')
  const [task, setTask] = useState([])



   const getAll = async () => {
    await fetch(`${url}results`)
    .then(response=>response.json())
    .then(response=>setTask(response))
  }

  const filterSearh=(task, value)=>{
    const resultSearch = task.filter((item) => {
      if(item.name.toLowerCase().includes(value.toLowerCase())){
        return item;
      }
    })
    setTask([...resultSearch])
   }

  useEffect(()=>{
    if(task){
      getAll()
    }
  }, [])

  const searchTask=(e)=>{
    const value = e.target.value
    setSearch(e.target.value)
    if(!value){
      getAll()
    }else{
      filterSearh(task, search)
    }
  }

  return (
    <div className="task__section">
      <div>
        <h1 className="title">All Tasks</h1>
        <hr className="title__hr--mobile" />
        <input type="search" placeholder="Search" className="input-search" onChange={searchTask} />
      </div>

      <TaskContainer prop={task} />

      <Link to="/AddTask">
        <button type="button" className="btn-plus">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#EA5959" />
            <path
              d="M30 21.6V38.4"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.6 30H38.4"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  )
}
