import React from 'react'

const ButtonList = () => {    //collection for button component 

  const mylist = ["All","Songs","Live","Movies","Cricket","Sports", "Comedy","Disney","Kapil","Fun"]
  return (
    <div className='flex m-1 p-1'>
    {
      mylist.map((name) => (
      <ul key={name}>
      <button className='flex m-1 px-6  rounded-lg font-normal py-2 w-24 items-center justify-center text-white bg-red-500 '><li>{name}</li></button>
    </ul>
    ))
    }  
    </div>
  )
}

export default ButtonList
