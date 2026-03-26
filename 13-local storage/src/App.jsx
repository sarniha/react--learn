import React from 'react'

const App = () => {
  const x=JSON.parse(localStorage.getItem('user'))
  console.log(x)
  
  return (
    <div>
      HELLO BHAIYON AUR BEHENON 
      
    </div>
  )
}

export default App
