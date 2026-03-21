import React from 'react'

const App = () => {
  const pageScrolling=()=>{
    console.log('fjdb')
  }
  
  return (
    <div onWheel={(elem)=>{
      if(elem.deltaY>0)
        console.log('downwards')
      else
        console.log('upwards')
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
