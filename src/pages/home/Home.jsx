import React from 'react'
import Task from '../../components/task/Task'
import Labels from '../../components/labels/Labels'
import './home.css'

const Home = () => {
  return (
    <div>
      <header className="header">
        <h1>All Tasks</h1>
        <input className="search-input" placeholder="Search"></input>
      </header>

      <main className="home__main-container">
        <Labels />
        <Task />
      </main>
    </div>
  )
}

export default Home
