import React, { useEffect, useState } from "react";
import { data } from "./../data";

export const Technology = () => {
  const { technology } = data;

  const [img, setImg] = useState("image-launch-vehicle-landscape");
  const [value, setValue] = useState("0");

  const handleClick = (e) => {
    setValue(e.target.value);
    setImg(e.target.id);
  };

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setImg("image-launch-vehicle-portrait");
    } else {
      setImg("image-launch-vehicle-landscape");
    }
  }, []);

  console.log("tech", technology);

  console.log("wind", window.innerWidth);

  return (
    <>
      <p className='destination__sub heigthLayoutDestination'>
        <span className='destination__number'>03</span> space launch 101
      </p>
      <div className='tech'>
        <img
          src={`./assets/technology/${img}.jpg`}
          className='tech__image'
        />

        <div className='tech__numberButtons'>
          <button
            type='button'
            className={`tech__button ${value == 0 ? "tech__active" : ""}`}
            id={
              window.innerWidth >= 1200
                ? "image-launch-vehicle-portrait"
                : "image-launch-vehicle-landscape"
            }
            value='0'
            onClick={handleClick}
          >
            1
          </button>
          <button
            type='button'
            className={`tech__button ${value == 1 ? "tech__active" : ""}`}
            id={
              window.innerWidth >= 1200
                ? "image-spaceport-portrait"
                : "image-spaceport-landscape"
            }
            onClick={handleClick}
            value='1'
          >
            2
          </button>
          <button
            type='button'
            className={`tech__button ${value == 2 ? "tech__active" : ""}`}
            id={
              window.innerWidth >= 1200
                ? "image-space-capsule-portrait"
                : "image-space-capsule-landscape"
            }
            onClick={handleClick}
            value='2'
          >
            3
          </button>
        </div>
        <div className='tech__info'>
          {technology.map(
            (t, i) =>
              i == value && (
                <div key={t.name}>
                  <p className='tech__terminology'>the Terminology...</p>
                  <p className='tech__name'>{t.name}</p>
                  <p className='tech__description'>{t.description}</p>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};
