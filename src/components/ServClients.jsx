import React from 'react'

const ServClients = ({image,description}) => {
  return (
         <div className='flex items-center '>
            <img src={image} alt="check" />
            <h5 className='font-thin ms-5'>{description} </h5>
        </div>
  )
}

export default ServClients