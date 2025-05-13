import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen bg-[#60B5FF] flex flex-row justify-around items-center'>
      <div className="w-1/2 h-2/3 flex justify-center items-center overflow-hidden  px-16 py-72">
        <img 
          src="./images/re.png" 
          alt="Reduce" 
          className='w-auto h-auto object-cover shadow-lg' 
        />
      </div>

      <div className="w-1/2 h-2/3 bg-black rounded-xl">
        hello 2
      </div>
    </div>
  )
}

export default Hero
