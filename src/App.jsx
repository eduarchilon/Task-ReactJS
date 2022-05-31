import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import AddTask from './pages/add-task/AddTask'
import EditTask from './pages/edit-task/EditTask'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/edittask" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
