import React from 'react'

function Navbar({data}) {
  return (
    <div className='bg-green-400 h-16 w-full flex text-xl justify-between px-14 items-center'>
      <h1 className='font-semibold'>Savan Music 🎶</h1>
      <div className='flex gap-4'>
        <h2>Favourties</h2>
        <h2>{data.filter(elem=>elem.favt).length}</h2>
      </div>
    </div>
  )
}

export default Navbar
