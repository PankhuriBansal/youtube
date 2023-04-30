import React, { useEffect, useState } from 'react'
import { YoutubeAPI } from "./utils/constants"
import VideoCard, {RedBorderVideoCard} from './VideoCard'
import { Link } from 'react-router-dom'

const VideosContainer = () => {
 
  const [videos,setVideos] = useState([])

  useEffect (() => {           //to make an api call we will use a getVideos api function and then make a function for getVideos
    getVideos();
  } ,[])

  const getVideos = async () => {
    const data = await fetch(YoutubeAPI)  
    const json = await data.json();
    setVideos(json.items)        //we will pass the json.items from the api to setVideos to get data in my videos from the api which should have video cards  
  }

  return (
    <div className='flex flex-wrap flex-direction: row '>
     {videos[0] && <RedBorderVideoCard info={videos[0]}/>}
     {videos.map((video)=>(
        <Link  
          key={video.id} to={"/watch?v="+video.id}>
          <VideoCard info={video}/>
          </Link>
      ))} 
    </div>
  )
}

export default VideosContainer

    // {/* importing video card from the videocard component and pass video data as prop inside it  */}
    // // iterating the video vard over all the videos in the api 