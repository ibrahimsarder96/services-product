import React from 'react';

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
      next: 4,
    },
    {
      image: banner4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: banner5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: banner6,
      prev: 5,
      id: 6,
      next: 1,
    },
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