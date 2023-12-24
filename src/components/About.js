import React from 'react'
import Home from './GoToHomePageButton'
import BlogPage from './GoToBlogPageButton'
import ContactPage from './GoToContactPageButton'
import '../App.css'

function About() {
  return (
    <div>
      <h1 className='blogHeading'>Hello Sir,WElcome to Our About Page</h1>
      <Home />
   < BlogPage />
   <ContactPage />
   
   
    </div>
  )
}

export default About
