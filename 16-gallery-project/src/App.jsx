import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const[userdata,setData]=useState([])
  const[index,setIndex]=useState(1)
  
    const getData=async()=>{
      const resp=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
      setData(resp.data)
      

    }
    useEffect(()=>{
      getData()

    },[index])
    let printUserData=<h3 className='text-pink-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> LOADING...</h3>
    if(userdata.length>0){
      printUserData=userdata.map((elem,idx)=>{
        return <div key={idx}>
          <Card elem={elem}/>
          
        </div>
      })
    }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white '>
        <div className='fixed text-4xl'> {index}</div>
        <div className='flex flex-wrap gap-4 p-4'> {printUserData}</div>
        <div className='flex h-[82%] justify-center items-center gap-6 p-4'>
          <button style ={{opacity:index==1?0.5:1}}onClick={()=>{
            if(index>1){
            setIndex(index-1)
            setData([])
            }

          }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'>Previous</button>
          <h4> Page {index}</h4>
          <button onClick={()=>{
            setIndex(index+1)
          }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95' >Next</button>
        </div>
    </div>
  )
}

export default App
