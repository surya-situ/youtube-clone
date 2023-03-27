import React from 'react'

const DemoNew = () => {

  let x  = 10;

  let changeVal = () => {
    x = x + 1
  }

  return (
    <div className='m-4 p-2 bg-slate-300 border border-black w-96 h-96'>

      <button className='bg-green-400 text-black p-2 ' onClick={changeVal}>change value</button>

      <div className='font-bold text-xl'>
        let = {x}
      </div>
    </div>
  )
}

export default DemoNew