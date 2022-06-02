import React from 'react'
import Labels from '../../components/labels/Labels'
import TaskSection from '../../components/taskSection/TaskSection'
import '../home/home.css'
import { getAllLabels } from '../../services/services'

function Home() {
  const Categories = getAllLabels()
  console.log(Categories)

  return (
    <div className="container home">
      <div className="label__container">
        <ul className="label__list">
          {Categories.map((Category, index) => {
            return <Labels key={index} category={Category} />
          })}
        </ul>
      </div>
      <TaskSection />
    </div>
  )
}

export default Home
