import React from 'react'

const Buttons = ({name}) => {            //now passing the name component and receive the name prop here from buttonlist component by destructuring it
  return (
    <div className='flex'> 
      <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg flex'>
       <h1 className="flex">{name}</h1> 
      </button>
    </div>
  )
}

export default Buttons
