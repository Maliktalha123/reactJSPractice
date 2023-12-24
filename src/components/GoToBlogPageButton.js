import React from 'react'
import { useNavigate } from 'react-router-dom'


function GoToBlogPageButton() {
const BlogNavigate = useNavigate();
const goToBlogPage = ()=>{
    BlogNavigate('/blog')
}
    return (
    <div>
<button onClick={goToBlogPage}>Go TO Blog PAge</button>      
    </div>
  )
}


export default GoToBlogPageButton
