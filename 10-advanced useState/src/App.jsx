import React, { useState } from 'react'

const App = () => {
  const[num,setNum]=useState({name:'Tristan',killcount:40})
  const fun=()=>{
    const newN={...num};
    newN.name='MORANA'
    newN.killcount=6
    

    setNum(newN)
  }
  return (
    <div>
      <h1> {num.name}</h1>
      <h1> {num.killcount}</h1>
      <button onClick={fun}> DAMN</button>
      
    </div>
  )
}

export default App
