import React from 'react'
import { useNavigate } from 'react-router-dom'




function GoToAboutPageButton() {

    const AboutNavigate = useNavigate();

const goToAboutPage = ()=>{
AboutNavigate('/about');    
}
    return (
    <div>
<button onClick={goToAboutPage}>Go To About Page</button>      
    </div>
  )
}




export default GoToAboutPageButton
