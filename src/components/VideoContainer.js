import React,{useEffect, useState} from 'react';
import {YOUTUBE_VIDEOS_API} from '../utils/constants'
import VideoCard, {HigherOrderFunction} from './VideoCard';

import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  let getVideos = async () => {
    let data = await fetch(YOUTUBE_VIDEOS_API);
    let result = await data.json();
    setVideos(result.items)
  }

  return (
    <div className='flex flex-wrap'>

      {videos[0] && <HigherOrderFunction info ={videos[0]}/>}

      {
        videos.map((video) => 
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video}/>
          </Link>
        )
      }

    </div>
  ) 

}

export default VideoContainer