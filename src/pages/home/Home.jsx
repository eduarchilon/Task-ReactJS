import React from 'react'
import Labels from '../../components/labels/Labels'
import TaskSection from '../../components/taskSection/TaskSection'
import '../home/home.css'
import { getAllLabels } from '../../services/services'

function Home() {
  const Categories = getAllLabels()

  return (
    <div className="container home">
      <div className="label__container">
        <ul className="label__list">
          <li className="label-item"><a href="#" className="label-link">All</a></li>
          {Categories.map((Category, index) => {
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
