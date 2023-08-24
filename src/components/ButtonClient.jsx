import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonClient = () => {
  return (
    <div className=''>
      <div className='hidden md:flex justify-center space-x-4 p-4'>
        <NavLink to='/'>
          <button className='bg-secondary hover:bg-red-400 ea w-[230px] h-[40px] rounded-full text-white uppercase font-semibold'>
            Devenir client
          </button>
        </NavLink>
        <NavLink to='/'>
          <button className='bg-Blue w-[230px] h-[40px] rounded-full text-white uppercase font-semibold'>
            Je suis client
          </button>
        </NavLink>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 text-center z-50 '>
        <NavLink to='/'>
          <button className='bg-secondary hover:bg-red-400 ease-linear w-[100%] h-[40px] rounded-full text-white uppercase font-semibold m-2'>
            Devenir client
          </button>
        </NavLink>
        <NavLink to='/'>
          <button className='bg-Blue w-[100%] h-[40px] rounded-full text-white uppercase font-semibold m-2'>
            Je suis client
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ButtonClient;
