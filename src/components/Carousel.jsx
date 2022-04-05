import * as React from "react";
import { data } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
};

function Carousel() {
  const { crew } = data;

  return (
    <Slider {...settings} className='relative'>
      {crew.map((c) => (
        <div className='crew__flex' key={c.name}>
          <img src={c.images.png} className='crew__img' />
          <div className='imgBorder'></div>
          <div className='crew__info'>
            <p className='crew__role'>{c.role}</p>
            <p className='crew__name'>{c.name}</p>
            <p className='crew__bio'>{c.bio}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
