import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';

const Carousel = () => {
  const { data: banners, loading, error } = useFetch(BASE_URL + '/banner');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log(banners);
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className='mySwiper d-xs-block'
      >
        {banners && banners.map((banner, index) => {
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
    </>
  );
};

export default Carousel;
