import React from 'react'
import Labels from '../../components/labels/Labels'
import TaskSection from '../../components/taskSection/TaskSection'
import '../home/home.css'

function Home() {
  return (
    <div className='container home'>
        <Labels />
        <TaskSection />
    </div>
  )
}

export default Home
