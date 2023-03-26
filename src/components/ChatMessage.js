import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
        <div className='flex items-center py-2'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='user' className='h-8'/>
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    </div>

  )
}

export default ChatMessage