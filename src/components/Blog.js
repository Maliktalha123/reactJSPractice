import React from 'react'
import Home from './GoToHomePageButton'
import AboutPage from './GoToAboutPageButton'
import ContactPage from './GoToContactPageButton'
import '../App.css'

function Blog() {
    return (
    <div>
      <h1 className='blogHeading'>Hello Sir,WElcome to Our Blog Page</h1>
  <Home className = "homeClass" />
  < AboutPage />
  < ContactPage />
    </div>
  )
}

export default Blog
