import React from 'react';
import { NavLink } from 'react-router-dom';
import { Services } from '../utils';
import Opportinuty from './opportinuty';

const Service = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center sm:ms-[5.2rem] ms-[3.5rem] mt-4'>
      <div className='flex flex-col items-center sm:items-start mb-5 sm:mb-0'>
        <h3 className='font-poppins font-bold text-[20px] text-center sm:text-left'>
          APBM c'est tellement d'avantages qu'on ne peut pas tout afficher ici!
        </h3>
        <div className='mt-4'>
          <NavLink to='/'>
            <button className='bg-secondary hover:bg-red-400 ease-out w-[230px] h-[40px] rounded-full text-white uppercase font-semibold '>
              Devenir client
            </button>
          </NavLink>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {Services.map((item,index) => (
          <Opportinuty key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
