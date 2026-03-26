import React from 'react'
import axios from 'axios'
import { useState } from 'react'



const App = () => {
  const[data,setData]=useState([])

  const getData=async()=>{
  const resp=await axios.get('https://jsonplaceholder.typicode.com/todos/')
  console.log(resp.data)
  setData(resp.data)


}

  return (
    <div>
      <button onClick={getData}> GET DATA</button><div>
        {data.map(function(element,idx){
          return <h3> HELLO from {element.title}</h3>
        })}

      </div>

      
    </div>
  )
}

export default App
