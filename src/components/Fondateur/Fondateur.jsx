import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Fondateur.css'
// import required modules
import { Pagination } from 'swiper/modules';
import { Fondateurs } from '../../utils';
import Carrousel from './Carrousel';

export default function App() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-4 mb-4'>
      <div className='bg-soft w-[50px] h-[5px] rounded-full mt-3 '/>
        <h3 className='font-poppins sm:text-[45px] text-[25px] '>Notre Fondateur(trice)</h3>
      </div>
      <Swiper
        
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="aswipper"
      >
        {Fondateurs.map((item,index)=>(

        <SwiperSlide className='aswiper-slide'>
          <Carrousel key={item.id} {...item} />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
