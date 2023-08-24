import React from 'react'
import './Fondateur.css'

const Carrousel = ({name,first,image,classe}) => {
  return (
    <div className='flex flex-wrap sm:flex-row items-start p-4'>
        
        <img src={image} alt="" className='' />
        <div className='flex flex-col items-start p-4 '>
            <h2 className='font-poppins text-[20px] uppercase'>{name}</h2>
            <h2 className='font-poppins text-[20px] capitalize'>{first}</h2>
            <h4>{classe}</h4>
        </div>
    </div>
  )
}

export default Carrousel