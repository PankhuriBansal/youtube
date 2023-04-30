import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//will contain list of icons 
const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);                 //subcribing store to work our sidebar , subscribe to a specific part of store 

  //early return coding pattern 
  if(!isMenuOpen ) return null;

  const mysidelist = ['Home','Library','Your Videos','Liked Videos','Shorts','Subscriptions','History','Watch Later','sldfh','kajbsfkj','akjsbfkjsabf','kajsbfkjsa']

  return (
    <div className='p-2 w-80 flex-row'>
    <div className='h-full w-56 shadow-2xl px-10 py-2 rounded-lg font-serif '>
    {
      mysidelist.map((name) => (
        <ul
        className=' hover:bg-gray-200 w-44 h-10  rounded-lg scroll-smooth'
         key={name} >
          <Link  className='justify-center items-center scroll-m-5'>
            <li className='my-4' >{name}</li>
          </Link>
        </ul>
      ))
    }  
    </div>
    </div>
  )
}

export default SideBar
