import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    <Card user="Tristan caine" img="https://images.unsplash.com/photo-1651486315755-caa0afcc04a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1OTUwMjB8fGVufDB8fHx8fA%3D%3D"/>

        <Card user="Morana caine" img="https://images.unsplash.com/photo-1576252137965-bfee510aaa6a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxVS0d2bnlqR01Oa3x8ZW58MHx8fHx8"/>

    
    </div>
  )
}

export default App
