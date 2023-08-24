import React from 'react'
import { Offres } from '../utils'
import Card from './Card'
const CardVisa = () => {
  return (
    <div className=' sm:flex sm:flex-row items-center justify-center ml-[5rem] pt-4'>
    {Offres.map((card,index)=>(
        <Card key={card.id} {...card}/>
    ))}
   
    
</div>
  )
}

export default CardVisa