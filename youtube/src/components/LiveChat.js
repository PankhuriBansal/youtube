import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/chatSlice';
import { generateRandomName, makeRandomMessage } from './utils/helper';

 
const LiveChat = () => {            //receving name and message as the props in the chatmessage component 

    const [liveMessage,setLiveMessage] = useState("")     //set state for using putting the live message in the livechat box

    const dispatch  = useDispatch();       //usedispatch to dispatch an action 

    const chatMessages = useSelector(store => store.chat.messages)        //subcrube to the store 

    // useEffect (() => {           //to make an api call we will use a getVideos api function and then make a function for getVideos
    //   getCommments();
    // } ,[])
  
    // const getCommments = async () => {
    //   const data = await fetch(YoutubeAPI)  
    //   const json = await data.json();
    //   setLiveMessage(json.items)        //we will pass the json.items from the api to setVideos to get data in my videos from the api which should have video cards  
    // }

    useEffect(() => {                 //using polling to get data for the live chat , doing garbage collection also to clear the setInterval
        const i = setInterval(() => {
        //API Polling = we will get the data and update the chat by using the redux...using the store and getting data in the live chat
        console.log("API Polling")       //api is polling after 2 seconds 
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20)               //dispatching message once the api polling is done 

        }))        
        },1500);                      //giving a time interval of 2second, means will get new data after 2 seconds 
        
        return () => clearInterval(i)
    
    },[])

  return (
    <>
    <div className='w-full h-[400px] ml-3 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse '>
      {/* should have chat messages in this column */}
     <div>
      {
        chatMessages.map((c,index) => <ChatMessage
            key={index}
        // dont use  index as keys 
       name = {c.name}
       message={c.message} 
        />)
      }
      </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black'
    onSubmit={(e) => {
      e.preventDefault()         //prevent the page from beign refreshed 
      console.log("Submit",liveMessage)
      dispatch(addMessage({
        name: "akshay saini",
        message: liveMessage
      }))
      setLiveMessage("")   //to delete the message one it is posted, setting it as empty 
    }}
    >  
    {/* to not refresh the page on submitting the form i need to use onSubmit form handler like above */}
        <input className='px-2 w-80' type='text' 
        value={liveMessage} 
        onChange={(e) => {
            setLiveMessage(e.target.value)}} />
        <button className='px-2 mx-2 bg-green-100 '>
          Submit
        </button>
      </form>
      </>
  )
}

export default LiveChat
