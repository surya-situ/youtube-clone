import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentContainer from './CommentContainer';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(closeMenu())
    },[]);

    // https://www.youtube.com/watch?v=LNUiseO9nH8
    
  return (
    <div className='flex flex-col'>
      <div className='px-5'>
        <iframe 
          width="1200" height="600" 
          // this link is form youtube embedded link from video share: {https://www.youtube.com/watch?v=LNUiseO9nH8 }
          src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
      <CommentContainer />
    </div>
    
  )
}

export default WatchPage