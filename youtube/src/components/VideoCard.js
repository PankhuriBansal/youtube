import React from 'react'

const VideoCard = ({info}) => {           //we will receive the info passd in the video container here to get as props
    // console.log(info)             //gives the whole information of the video card 
    const {statistics, snippet} = info        //taking information from the info in the video api 
    const {channelTitle,title, thumbnails} = snippet                                    //extracting thumbnails,channel title,
    return (                      
    <div className='p-2 m-2 w-56 h-72 shadow flex-wrap   '>
      <img  className='rounded-lg' alt= "video"  src = {thumbnails.medium.url}  />
      <ul>
        <li className='font-bold text-sm'>
            {title}
        </li>
        <div className='flex flex-col'>
        <li className='font-serif text-base'>
            {channelTitle}
        </li>
        <li className='decoration-slate-500 text-xs'>
            {statistics.viewCount} views 
            <img  className='h-3 w-3'
            alt='view-icon' 
                  src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png'
          />
        </li>
        </div>
      </ul>
    </div>
  ) 
}

export const RedBorderVideoCard = ({info}) => {     //higher order function , to do small modification in the video card eg to add small border
  return 
    <div className='p-1 m-1 border border-red-900 flex-wrap'>
      <VideoCard info={info}/>
    </div>
  
}

export default VideoCard
