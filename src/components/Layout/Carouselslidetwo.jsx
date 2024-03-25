import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import carousel1 from '../../assets/img/carousel/carousel1.gif';
import carousel2 from '../../assets/img/carousel/carousel2.gif';
import carousel3 from '../../assets/img/carousel/carousel3.gif';
import carousel4 from '../../assets/img/carousel/carousel4.gif';
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';

const Carouselslidetwo = () => {
  // const banners = [carousel1, carousel2, carousel3, carousel4];
  const { data: banners, loading, error } = useFetch(BASE_URL + '/banner');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(banners);
  return (
    <Swiper
      className=' my-4'
      spaceBetween={50}
      breakpoints={{
        250: {
          slidesPerView: 1,
        },
        781: {
          slidesPerView: 2,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={banner.img_url}
              className='w-100'
              alt={`Banner ${index}`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carouselslidetwo;
