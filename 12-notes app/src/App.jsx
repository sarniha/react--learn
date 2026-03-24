import React, { use, useState } from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task]
    copyTask.push({title,desc})
    setTask(copyTask)
    setTitle('')
    setDesc('')
    
  }
  const[title,setTitle]=useState('')
  const[desc,setDesc]=useState('')
  const[task,setTask]=useState([])
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)


  }
  return (
    <div className='h-screen lg:flex bg-black text-pink-300'>
      

      <form className='flex lg:w-1/2 p-10  flex-col gap-4  items-start' onSubmit={(e)=>{
        submitHandler(e)
        
      }}>
        <h1 className='text-3xl font-bold'> ADD NOTES</h1>
        
        <input type="text" placeholder="Enter task heading" value={title} className='px-5 border-2 font-medium w-full rounded py-2 outline-none' onChange={(e)=>{
          setTitle(e.target.value)

        }}></input>
        <input  type="text"  outline-none className='px-5 font-medium py-2 border-2 rounded w-full h-20' placeholder='Write Details ' value={desc} onChange={(e)=>{
          setDesc(e.target.value)
        }}></input>
        <button className='bg-white font-medium active:bg-black text-black px-5 py-2 rounded w-full'> Add Notes </button>
        
    
      </form>
      <div className='flex lg:border-l-2 lg:w-1/2  p-10'>
      <h1 className='text-3xl font-bold'> YOUR NOTES</h1>
      <div className='flex flex-wrap gap-5 mt-5 items-start justify-start  h-full overflow-auto'>
        {task.map(function(elem,idx){
         return <div key={idx} className="relative flex flex-col items-start justify-between h-52 w-40 rounded-xl  pb-4 px-6 text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjjJa2mRjxI8OW6IRL0c97EmN_kmYc22CUw&s')] bg-cover">
          <h2> </h2> <h3 className='px-2 py-2 leading-tex-xl font-bold text-xl '> {elem.title} </h3><p className='mt-4 leading-tight font-medium text-gray-700 px-2'> {elem.desc}</p> 
          <button onClick={()=>{
            deleteNote(idx)
          }} className='w-full bg-amber-900 text-white py-1 text-xs rounded font-bold cursor-pointer active:scale-95'> delete note</button></div>


        })}
        </div>
          

        


      </div>
      
      
      </div>
  )
}

export default App
