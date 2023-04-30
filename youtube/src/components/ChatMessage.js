import React from 'react'

const ChatMessage = ({name,message}) => {               
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
            className='h-11 w-10 ml-50]'
            alt='user-icon'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU" /> 
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
    </div>
  )
}

export default ChatMessage
