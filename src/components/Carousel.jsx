import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Project } from './index.js' 

export default function Carousel({items}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    className: 'vertical-center slider'
  };
  return (
    <Slider {...settings} className='flex justify-center items-center z-10'>
      {items.map(({img, title, description, techs, redirectionLinks}) => (
        <div key={title} className='w-full flex gap-3 justify-center items-center z-4 '>
          <Project img={img} title={title} description={description} techs={techs} redirectionLinks={redirectionLinks} />
        </div>
        ))}
    </Slider>
  );
}
