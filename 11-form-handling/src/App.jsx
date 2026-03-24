import React, { useState } from 'react'

const App = () => {
  const[title,setTitle]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("handled by",title)
    setTitle('')
  }
  return (
    <div>
      < form onSubmit={(e)=>{
        submitHandler(e)
      }
      }>
        <input type="text" placeholder="AAPKA SHUBH NAAM" value={title} onChange={(e)=>{
          setTitle(e.target.value);
          

        }}/> <br/>
        <button> SUBMIT KAREIN</button>
      </form>
    </div>
  )
}

export default App
