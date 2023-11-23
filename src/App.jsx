import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Chapters from './components/Chapters'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/chapters" element={ <Chapters/> } />

      </Routes>
    </div>
  )
}

export default App