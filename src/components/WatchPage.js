import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {

  const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(closeMenu())
    },[]);

    // https://www.youtube.com/watch?v=LNUiseO9nH8
  return (
    <div className='px-5'>
      <iframe 
        width="1200" height="600" 
        // this link is form youtube embedded link from video share
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default WatchPage