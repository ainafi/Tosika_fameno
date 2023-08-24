import React from 'react'
import { Footers } from '../utils'
import LinkFooter from './LinkFooter'
const Footer = () => {
  return (
    <div className='flex flex-wrap sm:flex-row justify-around  mr-4 mt-5 pt-9 pl-5'>
      {Footers.map((footers,index)=>(
        <LinkFooter key={footers.id} {...footers}/>
      ))}
      
      
    </div>
  )
}

export default Footer