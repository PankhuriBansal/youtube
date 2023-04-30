import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/appSlice'
import { YoutubeSearchAPI } from './utils/constants'
import {cacheResults} from './utils/searchSlice'

const Head = () => {

  const [suggestions,setSuggestions] = useState([])           //using useState to set suggestions while searching
  const [showSuggestions, setShowSuggestions] = useState(false)  //using this for hiding and showing us the suggestions when we are using the search bar 
  
  const [searchQuery, setSearchQuery] = useState("")    //setting state for search parameter value to apply debouncing
  // console.log(searchQuery)         //it is making multiple api calls on each key stroke so we will attach a debouncer
  
  const searchCache = useSelector((store) => store.search);  //subscribing the store to get stored results and store.search will give us the empty object
  const dispatch = useDispatch()
  /**   //this searcache is having results for the search queries
   * searchcache = {
   * "iphone": ["iphone 11","iphone 14"]
   * }
   * searchQuery = iphone
   * 
  */
  
  useEffect(() => {
   const timer =  setTimeout( () => {
    if( searchCache[searchQuery])  //trying to find out search cach of search query 
    {
      setSuggestions(searchCache[searchQuery])        //returning the suggestions with searchcache of search query 
    } 
    else{
      getSearchSuggestions()
    }
  },300);
    // => getSearchSuggestions(), 200) //calling api search function in the useEffect after declaring it below ,, //make an api call after every key press 
    return () => {
      clearTimeout(timer)
    }
    //but if the difference between the 2 api calls is <200ms, then decline the api call 
  },[searchQuery])             //adding searhcquery in the dependency array as api call should come when we search a query 
    
    
  /****
   * key - i
   *    --render the component
   *    --useEffect();
   *     --start a timer > make api call after 200ms 
   * 
   * key - ip
   *      ---destroy the component  calls useEffect return method also to clear the things up even before the 200ms expires and then our new timer is set up 
   *      --re-render the component
   *      --useEffect()
   *        --start a timer > make api call after 200ms .....a new timer as a new vriable is rerendering everytime 
   * 
   * 
   * but when we fo set timeout we need to clear it also , and my useEffect return will be called 
   * ***/ 

  const getSearchSuggestions = async () => {
    // console.log("Api call" + searchQuery) 
    const data = await fetch(YoutubeSearchAPI + searchQuery) ////fetching youtube search api along with the query which is coming from searchquery parameter , typing in the search box
    const json = await data.json()
    setSuggestions(json[1])                                                       //setting suggestions after getting data from json object 
    // console.log(json[1])
 
    dispatch(cacheResults({        //directly dispatching an action to get the results, if the searchquery not present in the cacheresults
      //will send object with key as searchquery 
      [searchQuery] : json[1]
    }       
    )   )  
  }

  const toggleMenuHandler = () => {       //here we are dispatching an action and action would be togglemenu 
    dispatch(toggleMenu())                //will not pass anything as togglemenu does not have payload 
  }
  return (
    // creating the first section for icons of hamburger and youtube icon
    <div className='grid grid-flow-col p-2 m-2 shadow-lg '>
    {/* using col-span-1 will give 1 portion to my menu and utube logo */}
    
    <div className='flex col-span-1 ' >
       <img 
            className='w-6 h-6 cursor-pointer my-2'          //to change to hand icon we need cursor-pointer 
            alt="menu"    
            onClick={()=>toggleMenuHandler()}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"/> 

        <a href="/" />
        {/* giving link tag here*/}
        <img 
            className='w-28 h-6 mx-2 my-2' 
            alt="youtube-logo"
            src='https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720950__340.png'
             />
    </div>
    {/* creating second section for the search item tab  */}
    <div className='col-span-10 px-10 py-1 '>
    <div>
      {/* for making the search work according to flipkart or utube */}
    
        <input className="w-60 border border-r-200 border-gray-400 px-3 py-1  ml-72 rounded-lg"
          type='text'  
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}   ///setting state of the search bar to e.target.value
            onFocus={() => setShowSuggestions(true)}   //show search bar when focused on the search window 
            onBlur={() => setShowSuggestions(false)}   //dont show search bar when not focused 
          />
        {/* <button className='border border-gray-400 px-3 py-1 rounded-r-full bg-slate-400' onClick={(e) => setSearchQuery(e.target.value)}>Search</button> */}
    </div>
    {showSuggestions && (<div className='bg-white py-3 my-2 absolute px-5 blur-0 w-60 shadow-lg rounded-lg border border-gray-200 ml-72 '>
      <ul>
      {/* map on li to get all the suggestions in the list form from id */}
      {suggestions.map((s) =>(
        <li key={s} className=' py-2 shadow-sm hover:bg-gray-100 w-[28]'>
        {s}
        </li> 
        ))}
      </ul>
    </div>)}   
    {/* here using showsuggestions to show the suggestions only when we are focusing on it, if showsuggestions is true then show it otherwise hide it */}
    </div>
    {/* creating the 3rd section of app the user icon  */}
    <div className='col-span-1'>
        <img
            className='h-10 w-10 ml-56 rounded-full'
            alt='user-icon'
            src='https://lh3.googleusercontent.com/uwnHCgy8Cp-_IArrdxWA-2cSQYFF-HYMTBG1pYasH_j20WP84O3dnje8PUnDcjCifMxrxm7iDPjHISR2nmOsaLkfGMXOcN5lNGa_a0M'
            />
    </div>
    </div>
  )
}

export default Head

// we have 3 sections in the utube page , left, middle, right 
//grid means app is divided into small grid sections and also use grid-flow-col
