import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Donations from './pages/Donations'
import Education from './pages/Education'
import Service from './pages/Service'
import Course from './pages/Course'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Donations' element={<Donations/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/CourseComponent/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App