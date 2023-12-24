import React from 'react'
import AboutPage from './GoToAboutPageButton'
import BlogPage from './GoToBlogPageButton'
import ContactPage from './GoToContactPageButton'
import '../App.css'
function Home() {
  return (
      <div>
          <h1 className='blogHeading'>Hello Sir,WElcome t0 Our Home Page</h1>
<AboutPage />
< BlogPage />
< ContactPage />
      
    </div>
  )
}

export default Home
