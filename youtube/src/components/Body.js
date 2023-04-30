import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
      {/* <MainContainer/>
      <WatchPage/>  */}
      {/* here maincontainer page is replaced by the watchpage while opeing a video....so to change it we need our outlet over here */}
    </div>
  )
}

export default Body
