import React, { useState, useEffect } from 'react';

const Planetes = () => {
  let [planet, setPlanet] = useState('Ma planete');

  useEffect(() => {
    fetch('https://swapi.dev/api/')
      .then((reponse) => reponse.json())
      .then((data) => setCitation(data.quote));
  }, []);
  return (
    <div>
      <h2>{planet}</h2>
      <button>Clique ici pour afficher les planètes </button>
    </div>
  );
};

export default Planetes;
