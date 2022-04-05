import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='home container heigthLayoutHome'>
      <div className='home__flexDesktop'>
        <div className='home__fieldsText'>
          <p className='subTitle'>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='title'>Space</h1>
          <p className='text'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to='destination'>
          <div className='home__explore'>
            <p className='home__exploreText'>Explore</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
