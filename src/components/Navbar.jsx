import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonClient from './ButtonClient';
import Logo from '../assets/Logo.png';
import Menu from '../assets/menu.png';
import Close from '../assets/close.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className='xl:max-w-[1240px] mx-auto '>
      <div className='flex items-center justify-between xs:ms-0 pl-4 sm:ms-10'>
        <NavLink to='/'>
          <img src={Logo} alt="logo" className='w-[120px]' />
        </NavLink>

        <ul className='hidden md:flex md:items-center justify-center mr-6'>
          {['banque-en-ligne', 'offre', 'service', 'carte-banquaire'].map((item) => (
            <li key={item} className='p-4 uppercase font-semibold'>
              <NavLink to={`/${item}`}>{item.replace('-', ' ')}</NavLink>
            </li>
          ))}
        </ul>

        {/* responsive navbar */}
        <div className='relative md:hidden flex flex-col justify-end md:mr-5 mr-4'>
          <button onClick={() => setToggle(!toggle)}>
            <img src={toggle ? Menu : Close} alt="" className='w-6' />
          </button>

          <div className={`${toggle ? 'hidden ' : 'flex items-center'}`}>
            <ul className='flex flex-col items-center justify-center absolute right-[10px] top-[30px] w-[200px] bg-white shadow-lg'>
              {['banque-en-ligne', 'offre', 'service', 'carte-banquaire'].map((item) => (
                <li key={item} className='p-4'>
                  <NavLink onClick={()=>setToggle(!toggle)} to={`/${item}`}>{item.replace('-', ' ')}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* button */}
        <ButtonClient />
      </div>
    </nav>
  );
}

export default Navbar;
