import React, { useState, useEffect } from 'react'
import Labels from '../../components/labels/Labels'
import TaskSection from '../../components/taskSection/TaskSection'
import '../home/home.css'
//import { getAllLabels } from '../../services/services'
import { url } from '../../components/taskContainer/TaskContainer'

function Home() {
  const [categories, setCategories] = useState([])
  const [categoryActual, setCategory] = useState('')
  const [task, setTask] = useState([])
  const [taskFiltered, setTaskFiltered] = useState([])

  const getAllLabels = async () => {
    const results = await fetch(`${url}results`)
    const allResults = await results.json()
    setCategories(() => allResults.map((element) => element.category))
  }

  const getAllTasks = async () => {
    const results = await fetch(`${url}results`)
    const allResults = await results.json()
    setTask(allResults)
    setTaskFiltered(allResults)
  }

  useEffect(() => {
    getAllLabels()
  }, [])

  useEffect(() => {
    getAllTasks()
  }, [])

  const filteredLabels = []
  categories.forEach((element) => {
    if (!filteredLabels.includes(element)) {
      filteredLabels.push(element)
    }
  })

  return (
    <div className="container home">
      <div className="label__container">
        <ul className="label__list">
          <li className="label-item">
            <a href="#" className="label-link">
              <button className="label-link" onClick={getAllTasks}>
                All
              </button>
            </a>
          </li>
          {filteredLabels.map((Category, index) => {
            return (
              <Labels
                categoryActual={categoryActual}
                setCategory={setCategory}
                key={index}
                category={Category}
                getAllTasks={getAllTasks}
              />
            )
          })}
        </ul>
      </div>
      <div className="border-home"></div>
      <TaskSection
        allLabelsFiltered={filteredLabels}
        categoryActual={categoryActual}
        task={task}
        setTask={setTask}
        getAllTasks={getAllTasks}
        taskFiltered={taskFiltered}
        setTaskFiltered={setTaskFiltered}
      />
    </div>
  )
}

export default Home
