import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  const btnClicked=()=>{
    navigate('/')
    

  }
  return (
    <div>
      <button onClick={btnClicked} className='bg-amber-700 font-medium px-5 py-2 rounded m-2 cursor-pointrt active:scale-95'> Return to Home Page</button>
      <h1> ABOUT PAGE</h1>
    </div>
  )
}

export default About
