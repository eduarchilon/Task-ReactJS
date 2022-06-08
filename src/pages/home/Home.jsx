import React, { useState, useEffect } from 'react'
import Labels from '../../components/labels/Labels'
import TaskSection from '../../components/taskSection/TaskSection'
import '../home/home.css'
//import { getAllLabels } from '../../services/services'
import { url } from '../../components/taskContainer/TaskContainer'
import { set } from 'date-fns'

function Home() {
  const [categories, setCategories] = useState([])

  const getAllLabels = async () => {
    const results = await fetch(`${url}results`)
    const allResults = await results.json()
    setCategories(() => allResults.map((element) => element.category))
  }

  useEffect(() => {
    getAllLabels()
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
              All
            </a>
          </li>
          {filteredLabels.map((Category, index) => {
            return <Labels key={index} category={Category} />
          })}
        </ul>
      </div>
      <div className="border-home"></div>
      <TaskSection />
    </div>
  )
}

export default Home
