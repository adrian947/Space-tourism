import React from "react";
import Carousel from "./../components/Carousel";

export const Crew = () => {
  return (
    <div>
      <p className='destination__sub heigthLayoutDestination'>
        <span className='destination__number'>03</span> Meet your Crew
      </p>
      <div className='crew'>
        <Carousel />
      </div>
    </div>
  );
};
