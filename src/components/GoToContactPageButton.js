import React from 'react'
import { useNavigate } from 'react-router-dom'


function GoToContactPageButton() {
 const ContactNavigate = useNavigate();
 const goToContactPage = ()=>{
    ContactNavigate('/contact')
 } 
 
 
    return (
    <div>
<button onClick={goToContactPage}>Go To Contact Page</button>      
    </div>
  )
}

export default GoToContactPageButton
