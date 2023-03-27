import React from 'react';


// importing name from buttonList.js
const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded'>
            {name}
        </button>
    </div>
  )
}

export default Button