import React from 'react'

const VideoCard = ({info}) => {

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img src={info.snippet.thumbnails.medium.url} alt="thumbnail" className='rounded-lg' />
        <div>
            <ul>
                <li className='font-bold py-2'>{info.snippet.localized.title}</li>
                <li>{info.snippet.channelTitle}</li>
                <li>{info.statistics.viewCount} views</li>
            </ul>
        </div>
    </div>
  )
}

export const HigherOrderFunction = ({info}) => {
  return (
    <div className="p-1 m1 border border-red-900">
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard