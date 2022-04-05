import { useState } from "react";
import { Planet } from "./../components/Planet";

export const Destination = () => {
  const [idButton, setIdButton] = useState("moon");

  const handleClick = (e) => {
    setIdButton(e.target.id);
  };

  return (
    <>
      <p className='destination__sub heigthLayoutDestination'>
        <span className='destination__number'>01</span> pick your destination
      </p>
      <div className='destination container'>
        <img
          src={`./assets/destination/image-${idButton}.png`}
          alt={idButton}
          className='destination__img'
        />

        <nav className='destination__nav'>
          <ul className='destination__ul'>
            <button
              type='button'
              id='moon'
              onClick={handleClick}
              className={`${
                idButton === "moon" ? "destination__active" : ""
              } destination__button`}
            >
              Moon
            </button>
            <button
              type='button'
              id='mars'
              onClick={handleClick}
              className={`${
                idButton === "mars" ? "destination__active" : ""
              } destination__button`}
            >
              Mars
            </button>
            <button
              type='button'
              id='europa'
              onClick={handleClick}
              className={`${
                idButton === "europa" ? "destination__active" : ""
              } destination__button`}
            >
              Europa
            </button>
            <button
              type='button'
              id='titan'
              onClick={handleClick}
              className={`${
                idButton === "titan" ? "destination__active" : ""
              } destination__button`}
            >
              Titan
            </button>
          </ul>
          <div className='destination__info'>
            <Planet id={idButton} />
          </div>
        </nav>
      </div>
    </>
  );
};
