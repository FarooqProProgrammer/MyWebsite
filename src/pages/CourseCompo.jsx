import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'
import Student from '../Components/Student'
import { AllStudents } from '../Components/AllStudents'

const CourseCompo = () => {
  return (
    <div>
        <Navbar/>
        <Student/>
        <AllStudents/>
        <Footer/>
    </div>
  )
}

export default CourseCompo
