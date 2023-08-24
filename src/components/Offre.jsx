import React from 'react'
import One from '../assets/one-mobile.png'

const Offre = () => {
  return (
    <div className='flex flex-col items-center   bg-gradient-to-r from-Blue via to-blue-600 to bg-purple-600 h-[300px]'>
        <div className='mt-[3.5rem] ms-4'>
            <h2 className='text-[20px] sm:text-[30px] font-poppins text-white'>À chaque style de vie son offre bancaire dédiée !</h2>
        </div>

        <div className='sm:bg-white sm:rounded-full p-2 mt-5 sm:w-[50%] flex  justify-around'>
            <button className='border p-2 rounded-full text-white ms-4 sm:bg-softBleu font-poppins'>pour moi</button>
            <button className='border p-2 rounded-full text-white ms-4 sm:bg-softBleu font-poppins'>pour vous</button>
            <button className='border p-2 rounded-full text-white ms-4 sm:bg-softBleu font-poppins'>pour mon ado</button>
            
        </div>

       
    </div>
  )
}

export default Offre