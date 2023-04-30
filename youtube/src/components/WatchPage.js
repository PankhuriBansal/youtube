import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice'
import { useSearchParams } from "react-router-dom";
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


//to build this watch page we will use this video present in the data and use the id to render the video 
const WatchPage = () => {
  let [searchParams] = useSearchParams(); ///initially my params are empty as we are missing "/", so we will use useSearchParams
    // console.log(searchParams.get("v"))      //to search for the query we use the .get and also need to search the query using a ? and giving v as the search id 
    
    const dispatch = useDispatch() 
 
    useEffect(() => {             //dispatch an event to collapse the side bar when we reach to watch page on it's own 
        dispatch(closeMenu())     //creating one more action close menu to dispatch 
    },[])
  return (
    <div className='flex-col w-full'>
    <div className='px-5 flex w-full'>
    <div>
      <iframe width="800" height="400" 
      src= {"https://www.youtube.com/embed/" +  searchParams.get("v")}
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
      </iframe>
    </div>
    <div className='w-full'>
      <LiveChat/>
    </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage
