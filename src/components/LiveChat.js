import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomMessages, generateRandomNames } from '../utils/helper';
import ChatMessage from './ChatMessage';


const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState()

    const dispatch = useDispatch();
    
    // selecting messages from store:
    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // console.log('clearing console.');
            dispatch(addMessage({
                name: generateRandomNames(),
                message: generateRandomMessages(20) 
            }))
        }, 1500)

        return () => clearInterval(i)
    },[])

  return (
    <>
    {/* live chat section */}
        <div className='w-full h-[600px] ml-2 p-2 rounded-lg bg-slate-100 border border-black overflow-y-scroll flex flex-col-reverse'>
            <div>
                {
                    chatMessages && chatMessages.map((c ,i) => ( 
                        <ChatMessage key={i} name={c.name} message={c.message} />
                    ))
                }
            </div>
        </div>
        {/* input section */}
        <form 
            onSubmit={(e) => {e.preventDefault(); 
                dispatch(addMessage({
                    name:'suryakanta',
                    message: liveMessage
                }))
                setLiveMessage('');
            }}
            className='w-full p-2 ml-2 border border-black'
        >
            <input 
                type="text" 
                value={liveMessage} 
                onChange={(e) => {setLiveMessage(e.target.value)}} className='w-[250px] border border-black'
            />
            <button className='px-2 mx-3 bg-green-200'>submit</button>
        </form>
    </>
  )
}

export default LiveChat