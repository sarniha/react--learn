import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 justify-between flex items-center px-18 h-[90vh] gap-10'>
        <LeftContent/>
        <RightContent users={props.users}/>
      
    </div>
  )
}

export default Page1Content
