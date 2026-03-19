import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Navbar from './components/section1/Navbar'

const App = () => {
  const users=[
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',intro:'',tag:'Satisfied'},
    {img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',intro:'',tag:'underserved'},
    {img:'https://media.istockphoto.com/id/1094918638/photo/beat-the-deadline-with-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=As2qduZzHLzpybGqSF7L6tKIwov9V5PvOgui7M3ERGg=',intro:'',tag:'Satisfied'},
    {img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',intro:'',tag:'Underserved'},
    {img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',intro:'',tag:'Satisfied'}
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
      


    
    </div>
  )
}

export default App
