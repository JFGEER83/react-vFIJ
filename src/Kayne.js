import React, { useState, useEffect } from 'react';

const Kayne = () => {
  let [citation, setCitation] = useState('Ma citation');

  useEffect(() => {
    fetch('https://api.kanye.rest/')
      .then((reponse) => reponse.json())
      .then((data) => setCitation(data.quote));
  }, []);
  return (
    <div>
      <h2>{citation}</h2>
      <button>
        Clique ici pour afficher une nouvelle phrase de KayniKayne{' '}
      </button>
    </div>
  );
};

export default Kayne;
