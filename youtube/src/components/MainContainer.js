import React from 'react'
import ButtonList from './ButtonList'
import VideosContainer from './VideosContainer'

const MainContainer = () => {       //should have buttons list 
  return (
    <div className='col-span-11 flex-wrap'>
      <ButtonList/>
      <VideosContainer/>
    </div>
  )
}

export default MainContainer
