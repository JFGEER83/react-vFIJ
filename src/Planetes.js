import React, { useState, useEffect } from 'react';

const Planetes = () => {
  let [planet, setPlanet] = useState('Ma planete');

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/1/name/')
      .then((reponse) => reponse.json())
      .then((data) => setPlanet(data.results));
  }, []);
  return (
    <div>
      <h2>{planet}</h2>
      <button>Clique ici pour afficher les planètes </button>
    </div>
  );
};

export default Planetes;
