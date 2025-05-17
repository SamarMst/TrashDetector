import React from 'react'

function Navbar() {
  return (
    <div className=' h-16 bg-[#75fc8b] flex items-center justify-between'>
      <div className="flex flex-row items-center"> 
        <a href='/'><img src="./images/waste-bin.png" alt="logo" className='w-10 h-10 ml-4' /></a>
        <h1 className='text-white text-2xl font-bold ml-2'>Trash Classifier</h1>
      </div>
      {/* <div className='flex flex-row mr-10'> 
        <a href='/' className='text-white text-lg font-semibold ml-4 hover:underline hover:underline-offset-4 decoration-white'>Home</a>
        <a href='/services' className='text-white text-lg font-semibold ml-4 hover:underline hover:underline-offset-4 decoration-white'>Services</a>
        <a href='/about' className='text-white text-lg font-semibold ml-4 hover:underline hover:underline-offset-4 decoration-white'>About</a>
        <a href='/contact' className='text-white text-lg font-semibold ml-4 hover:underline hover:underline-offset-4 decoration-white'>Contact</a>

      </div> */}
    </div>
  )
}

export default Navbar