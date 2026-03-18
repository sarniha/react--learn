import React from 'react'

const Card = (props) => {
  return (
    <div>
                <div className='card'>
                  <img src={props.img}/>
      
            <h1> {props.user}</h1>
            <p> Morana Caine is one of the central characters in *The Predator* by RuNyx, portrayed as an intelligent, fearless, and highly skilled hacker with a mysterious past.
      </p>
      <button> VIEW PROFILE</button>
            
          </div>
          
      
    </div>
  )
}

export default Card
