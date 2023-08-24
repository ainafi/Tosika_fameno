import React from 'react'
import Heading from '../components/Heading'
import Service from '../components/Service'
import Offre from '../components/Offre'
import CardVisa from '../components/CardVisa'
import Client from '../components/Client'
import Fondateur from '../components/Fondateur/Fondateur'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='xl:max-w-[1240px] mx-auto overflow-hidden'>
      <Heading/>
      <Service/>
      <Offre/>
      <CardVisa/>
      <Client/>
      <Fondateur/>
      <Footer/>
     

      
    </div>
  )
}

export default Home

