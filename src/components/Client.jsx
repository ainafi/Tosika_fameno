import React from 'react'
import Check from '../assets/check.png'
import Assist from '../assets/assistance-mains.jpg'
import { NavLink } from 'react-router-dom'
// import { Clients } from '../utils'
import ServClients from './ServClients'
const Client = () => {
  return (
    <div className='flex items-center flex-col mt-5 py-5'>
       <div className='flex flex-wrap-reverse sm:flex-row'>
         <div className='flex flex-col items-start p-5'>
         <div className='bg-Blue w-[50px] h-[5px] rounded-full mt-5 '/>
          <h3 className='font-poppins font-semibold text-[13px] sm:text-[20px] text-start mb-3 p-2 '>Un service client toujours là pour  <br/>vous !</h3>

          <div className='flex items-center pb-5'>
            <img src={Check} alt="" />
            <h5 className='font-poppins text-[13px] sm:text-[18px] '>Nos conseillers de la Hello Team à vos côtés <br />(par chat, téléphone et email).</h5>
          </div>

          <div className='flex items-center pb-5'>
            <img src={Check} alt="" />
            <h5 className='font-poppins text-[13px] sm:text-[18px] '>assistance et guide pour ameliorer votre projet si <br /> necessaire</h5>
          </div>

          <div className='flex items-center pb-5'>
            <img src={Check} alt="" />
            <h5  className='font-poppins  text-[13px] sm:text-[18px]'>Un lexique et des FAQ pour trouver vos réponses en  <br /> quelques clics.</h5>
          </div>
          
          <div className='mt-5'>
            <NavLink to='/'>
              <button className='bg-soft hover:bg-red-400 ease-out w-[230px] h-[40px] rounded-full text-[13px] sm:text-[18px] text-white uppercase font-semibold'>
                 Nous contacter
               </button>
            </NavLink>
          </div>
         </div>
         <img src={Assist} alt="" className='w-[500px]' />

       </div>
    
      
        
    </div>
  )
}

export default Client