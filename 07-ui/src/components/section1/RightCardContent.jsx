import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'> {props.id+1} </h2>
        <div>
            <p className='text-xl text-shadow-2xs leading-normal text-white mb-14'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, saepe. Praesentium provident accusamus omnis perferendis?</p>
            <div className='flex justify-between '>
                <button className='bg-pink-500 text-white font-medium px-8 py-3 rounded-full text-gray'> {props.tag}</button>
                <button className='bg-pink-500 text-white font-semibold px-3 py-2 rounded-full'><i className="ri-arrow-right-fill"></i></button>
            </div>
        </div>
        </div>
      
  )
}

export default RightCardContent
