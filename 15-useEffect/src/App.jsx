import React, { useEffect, useState } from 'react'
import { use } from 'react'

const App = () => {
  const[num,setNum]=useState(0)
  const[num2,setNum2]=useState(0)
  useEffect(()=>{
    console.log('i am useeffect..');
  },[num])

  return (
    <div>
      <h1> Value of num is {num}</h1>
      <h1> Value of num2 is {num2}</h1>
      <button onClick={()=>{
        setNum2(num2+1)
        
      }} onKeyDown={()=>{
        setNum(num+1)
      }}> CLICK</button>
      
    </div>
  )
}

export default App
