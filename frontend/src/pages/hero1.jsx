import React, { useEffect, useState } from "react";
import DragNdrop from './DragNDrop/DragNDrop';

function Hero1() {
    const [files, setFiles] = useState([]);
  return (
    <>
      <div className='h-[618px] bg-[#75fc8bed] flex flex-row justify-around items-center'>
      <div className='flex flex-col justify-around items-center p-16'>
        <DragNdrop onFilesSelected={setFiles} width="500px" height='400px'/>
        
      </div>
        <div className='flex flex-row justify-around items-center p-16 space-x-8'>
        <div className="flex h-[170px] w-[170px]">
            <img 
                src="./images/paper-bin.png" 
                alt="Reduce" 
                className='w-auto h-auto object-cover' 
            />
        </div>
        <div className="flex h-[170px] w-[170px]">
            <img 
                src="./images/plastic.png" 
                alt="Reduce" 
                className='w-auto h-auto object-cover' 
            />
        </div>
        <div className="flex h-[170px] w-[170px]">
            <img 
                src="./images/metal.png" 
                alt="Reduce" 
                className='w-auto h-auto object-cover' 
            />
        </div>
        <div className="flex h-[170px] w-[170px]">
            <img 
                src="./images/glass-bin.png" 
                alt="Reduce" 
                className='w-auto h-auto object-cover' 
            />
        </div>
        
      </div>
       
      </div>
      
    </>
  )
}

export default Hero1
