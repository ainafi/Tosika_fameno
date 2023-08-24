import React from 'react'

const Opportinuty = ({description,image}) => {
  return (
    
        <div className='flex flex-col items-start   '>
            <img  src={image} alt={image} className='w-[90px]' />
            <h5 className='text-[15px] sm:text-[25px]  font-poppins '>{description}</h5>
        </div>
        
    
  )
}

export default Opportinuty