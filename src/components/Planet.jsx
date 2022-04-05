import React from "react";
import { data } from "../data";

export const Planet = ({ id }) => {
  const { destinations } = data;
  const idUppperCase = id.charAt(0).toUpperCase() + id.slice(1);

  const infoPlanet = destinations.filter(
    (dest) => dest.name === idUppperCase
  )[0];

  return (
    <div className='planet'>
      <h1 className='planet__title'>{infoPlanet.name}</h1>
      <p className='planet__description'>{infoPlanet.description}</p>
      <div className='planet__distance'>
        <div className='planet_distaceField'>
          <p className='planet__distanceSub'>avg. distance</p>
          <p className='planet__distanceP'>{infoPlanet.distance}</p>
        </div>
        <div className='planet_distaceField'>
          <p className='planet__distanceSub'>est. travel time</p>
          <p className='planet__distanceP'>{infoPlanet.travel}</p>
        </div>
      </div>
    </div>
  );
};
