import React from 'react'
import Button from './Button'

const lists = ['All', 'Movies', 'Games', 'News', 'Funny', 'Cooking', 'Cricket', 'Bollywood', 'Motivation', 'Gadget', 'lessons', 'Musics']

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        lists.map((items, index) => {
          
          return <Button key={index} name={items}></Button>
        })
      }
    </div>
  )
}

export default ButtonList