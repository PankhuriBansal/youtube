import React, { useMemo, useState } from 'react'
import { findPrime } from './utils/helper'
// created this for useMemo hook and to change states 
const Demo = () => {

    const [text,setText] = useState(0)        //seting the state of the text

    const [isDarkTheme,setIsDarkTheme] = useState(false)       //using this for setting dark and light theme in the state variable

    // console.log("Rendering....")
    //heavy operation our state changes and we need to memoize our heavy operation - such as calculating square roots or nth prime numbers 
    const prime = useMemo(() => findPrime(text),[text])   //using useMemo hook to memoize the results of this function 
    
    return (
    <div 
        className={
            'm-4 p-2 w-96 h-96 border border-black' +
            (isDarkTheme && 'bg-gray-950')
    }>
    {/* adding extra classes to make the dark theme visible in the page */}
    <div>
        <button 
            className='m-10 p-2 bg-green-200'
            onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
    </div>
      <div>
        <input className='border border-black w-72 px-2'
         type='number' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <h1>nth Prime: {prime} </h1>
      </div>
    </div>
  )
}

export default Demo

//when i am typing anything in the input box the component is rerendering each time we are typing the input value 