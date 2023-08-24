import React from 'react'
import {BiPhone} from "react-icons/bi"
import {BsChatDots} from "react-icons/Bs"
import {AiOutlineQuestion,AiOutlineCopyright} from "react-icons/ai"
const FooterBotto = () => {
  return (
    <div className=' bg-gradient-to-r from-Blue via to-blue-600 to bg-blue-300-600 p-5'>
        <div className='flex items-center justify-around'>
            <div className='flex items-center text-white hover:text-blue-300 cursor-pointer'>
                <BiPhone className='w-[45px] h-[25px]' />
                <h4 className='mr-4'>Appelez-nous</h4>
            </div>
            <div className='flex items-center text-white hover:text-blue-300 cursor-pointer'>
                <BsChatDots className='w-[45px] h-[25px]' />
                <h4 className='mr-4'>Chattez</h4>
            </div>
            <div className='flex items-center text-white hover:text-blue-300 cursor-pointer'>
                <AiOutlineQuestion className='w-[45px] h-[25px]' />
                <h4 className='mr-4'>Consultez les FAQ</h4>
            </div>

        </div>
        <div className='flex items-center justify-center mt-5'>
            <AiOutlineCopyright className='mr-4 text-gray-300'/>
            <h5 className='text-[12px] text-gray-300'>RAZANAMINO Aina Finaritra</h5>
        </div>
    </div>
  )
}

export default FooterBotto