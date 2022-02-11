import React, { useState, useEffect } from 'react';

const Planetes = () => {
  const [planetes, setPlanetes] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((reponse) => reponse.json())
      .then((data) => { 
        //console.log(data.results);
        setPlanetes(data.results);
      });
    }, []);
  return (
    <div>
      <h2>Planetes</h2>
      {planetes.map(planet => <p>{planet.map}</p>)}
      
      <button>Clique ici pour afficher les planètes </button>
    </div>
  );
};

export default Planetes;
