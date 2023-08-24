import React from 'react'

const LinkFooter = ({title,liens}) => {
  return (
    <div>
    <div className='bg-soft w-[45px] h-[5px] rounded-full mt-3 mb-1 '/>
    <h5 className='font-poppins font-bold capitalize mb-4'> {title}</h5>
        <ul>
        {liens.map((lien) => (
          <li
            key={lien.id}
            className='pb-2 pt-1 text-gray-600 hover:text-softBleu capitalize cursor-pointer'
          >
            {lien.link}
          </li>
        ))}
        </ul>
   </div>
  )
}

export default LinkFooter