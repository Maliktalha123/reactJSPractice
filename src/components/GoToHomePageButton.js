import React from 'react'
import { useNavigate } from 'react-router-dom'



function GoToHomePageButton() {
const navigate = useNavigate();
const goToHomePage = ()=>{
navigate('/')
}



    return (
    <div>
      <button onClick={goToHomePage}>Go To Home/Main Page</button>
    </div>
  )
}

export default GoToHomePageButton;