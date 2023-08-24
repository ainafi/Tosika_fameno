import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({bg,text,description,colorTitle,name}) => {
  return (
    <Swiper
      
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={200}
      slidesPerView={5}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className={`w-[120px] h-[120pw]  bg-${bg} rounded-[20px] p-2`} >
            <h6 className={`border border-${text} text-${colorTitle} text-[12px] font-poppins rounded-full p-1 w-[90px] `}>{name}</h6>
            <p className={`font-poppins text-[10px] text-${text}  mt-2`}> 
            {description}</p>
        </div>
      </SwiperSlide>
     
      
     

    </Swiper>
  );
};