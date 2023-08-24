import React from 'react'
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import Swipper from './Swipper';
import { Sales } from '../utils';
const Heading = () => {
  return (
    <div className='heading flex flex-wrap sm:flex-row  '>
        <div className='text-white sm:ms-[5.2rem] ms-[2.5rem] sm:w-[50%]'>
            <div className='bg-white w-[50px] h-[5px] rounded-full mt-3 '/>
            <h4 className='pt-3 font-medium font-poppins text-[13px] sm:text-[18px]'>Bienvenue chez APBM ,votre partenaire financier dédié l'essor:    
              <span className='text-[40px] sm:text-[50px] font-semibold font-yavon tracking-widest  '>
              <Typewriter
              options={{
                loop:true
              }}
               onInit={(typewriter) => {
                typewriter.typeString('jeune  etudiant')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('entreprise PME')
                  .deleteAll()
                  .typeString('jeune Mariée')
                  .start();
              }}
              /></span>
              
               </h4>

               <h5 className='pt-2 font-medium font-poppins text-[13px] sm:text-[18px] '  >Notre mission est de rendre vos reves accecibles en proposant des solutions de financelent rapides et simple . 
                <br />
                Decouvrez comment pouvons vous aider à réaliser vos asipiration avec assistance personnalisée et des opportinutés uniques.
               </h5>

               <div className='mt-9 flex flex-col items-center sm:items-start'>
                  <NavLink to='/'>
                    <button className='bg-secondary hover:bg-red-400 ease-out w-[230px] h-[40px] rounded-full text-[13px] sm:text-[18px] text-white uppercase font-semibold'>
                      Devenir client
                    </button>
                 </NavLink>
                 <br />
                  <NavLink to='/'>
                    <button className='bg-white w-[230px] h-[40px] rounded-full text-blue-600 uppercase font-semibold text-[13px] sm:text-[18px] my-2'>
                      pourquoi nous Choisir
                    </button>
                 </NavLink>
               </div>
        </div>
        <div className='flex items-end  sm:w-[40%] w-full p-5'>
          {Sales.map((swiper,index)=>(
            <Swipper key={swiper.id} {...swiper}/>
          ))}
        </div>
        <div className='bg-blue-300'>

        </div>
    </div>
  )
}

export default Heading