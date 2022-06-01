import React from 'react'
<<<<<<< HEAD
=======
import Task from '../../components/task/Task'
>>>>>>> 883a4a7f4812d4489cc43935fd02299c5aa25c93
import Labels from '../../components/labels/Labels'
import TaskSection from '../../components/taskSection/TaskSection'
import '../home/home.css'

function Home() {
  return (
<<<<<<< HEAD
    <div className='home'>
      <Labels />
      <TaskSection />
=======
    <div className="container">
      <h1>All Tasks</h1>
      <input className="search-input" placeholder="Search"></input>

      <main className="home__main-container">
        <Labels />
        <Task />
      </main>
>>>>>>> 883a4a7f4812d4489cc43935fd02299c5aa25c93
    </div>
  )
}

export default Home
