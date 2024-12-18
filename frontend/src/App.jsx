import React from 'react'
import Home from './Home/Home'
import{ Route,Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './Components/Signup'

function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
    </>
  )
}

export default App