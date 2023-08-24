import React from 'react'

const Card = ({image,title,description,sub}) => {

  return (
    
    <div className="flex flex-col items-center justify-center mr-5 md:pl-[3rem] pb-5">
        <img src={image} alt="" />
        <h3 className='text-[25px] capitalize font-poppins text-Blue mt-5 mb-5'>{title}</h3>
        <h4 className='text-center font-poppins '>{description}</h4>
        <h4 className='text-center font-extralight '>{sub}</h4>
        <h6 className='text-blue-700 underline mt-5'>`en savoir plus sur {title}`</h6>
    </div>
  )
}

export default Card

