import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("handled")
  }
  return (
    <div>
      < form onSubmit={(e)=>{
        submitHandler(e)
      }
      }>
        <input type="text" placeholder="AAPKA SHUBH NAAM"/> <br/>
        <button> SUBMIT KAREIN</button>
      </form>
    </div>
  )
}

export default App
