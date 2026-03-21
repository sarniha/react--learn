import React,{useState} from 'react'

const App = () => {
  const[num,setNum]=useState(0)
  const inc=()=>{
    setNum(num+1)
  }
  const dec=()=>{
    setNum(num-1)
  }
  const jump=()=>{
    setNum(num+7)
  }

  return (
    <div>
      <h1> {num}</h1>
      <button onClick={inc}>increase </button>
      <button onClick={dec}> decrease</button>
      <button onClick={jump}> jump by 7 </button>
      
    </div>
  )
}

export default App
