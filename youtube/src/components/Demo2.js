import React, {useEffect, useRef, useState } from 'react'

const Demo2 = () => {

    const [y,sety] = useState(0)

    let x =10

    const z = useRef(0)
    // console.log(z)          //returns us an object 
    // not like => ref = 0
    //ref = {current: 0}

    const i = useRef(null);     //let is not a good and trsuted way to work with the useEffect as it renders only once...so we will use useRef over here
    useEffect(() => {
     i.current = setInterval(() => {      //printing after every 1 second according to the setInterval 
        //as i is an object so we will use i.current to upadte the value of i 
            console.log("Namaste React", Math.random())
        },1000);
        return () => clearInterval(i.current)
    }, [])

  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div>
      <button 
      className='bg-green-200 px-2 m-4 '
      onClick={() => {
        x = x+1
        {console.log(x)}  ///it is increasing the value of x but it will not render on the UI so we cannot see that on the screen as we are using it in let
        // but if we will use a const it will not change and also gives an error
      }}>
        Increase x
        
      </button>
        <span className='font-bold text-xl'>Let ={x}</span>
      </div>
      <div>
      <button 
      className='bg-green-200 px-2 m-4 '
      onClick={() => {
       sety(y+1)   //it is increasing and it is also rendering , and as page has rerendered the value of x is also initializes to 10 
      }}>
        Increase y
        
      </button>
        <span className='font-bold text-xl'>state ={y}</span>
      </div>
      <div>
      <button 
      className='bg-green-200 px-2 m-4 '
      onClick={() => {
       z.current = z.current + 1         //to update the value of ref variable 
       console.log(z.current)      //chaging the value but not rendering the UI 
      }}>
        Increase z
        
      </button>
        <span className='font-bold text-xl'>Ref ={z.current}</span>
      </div>
      <button
        onClick={() => {    //it will stop printing the value of the above useEffect fnction 
        // but if my component will rerender anytime again it will not persist after rerender.....so it is not a good way(let is not a trusted way)
        //so we will use useRef above in the function
            clearInterval(i.current)
        }}
       className='bg-red-600 p-4 m-4 text-white font-bold rounded-lg '>
      Stop Printing</button>
    </div>  
  )
}

export default Demo2


// whole concept useRef is a local component variable which will not rerender my component , hold the value between states 
    