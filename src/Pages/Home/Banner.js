import React from 'react';
import banner1 from '../../assets/banner/1.jpg';
import banner2 from '../../assets/banner/2.jpg';
import banner3 from '../../assets/banner/3.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
  const bannerData = [
    {
      image: banner1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: banner3,
      prev: 2,
      id: 3,
      next: 1,
    }
  ]
  return (
    <div className="carousel w-full py-10">
    {
      bannerData.map(slide => <BannerItem
      key={slide.id}
      slider={slide}
      ></BannerItem>)
      }
  </div>
  );
};

export default Banner;