//useMemo example

import React, { useMemo, useState } from 'react';
import {findPrime} from '../utils/helper'

const Demo = () => {

    const [text, setText] = useState();
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div className={'m-4 p-2 w-96 h-96 border border-black' + (isDarkTheme && ' text-red-800 font-bold bg-gray-500')}>
        <div>
            <button className='bg-green-800 text-white font-bold' onClick={() => setIsDarkTheme(!isDarkTheme)}>change color</button>
        </div>
        <div>
            <input className='border border-black w-72 px-2' type="text"  value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div>
            <h1>nth prime number:{prime} </h1>
        </div>
    </div>
  )
}

export default Demo