import React, { useState, useEffect } from 'react';

const RickMory = () => {
  const [rick, setRick] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((reponse) => reponse.json())
      .then((data) => { 
        //console.log(data.results);
        setRick(data.results);
      });
    }, []);
  return (
    <div>
      <h2>Rick and Morty</h2>
      {rick.map(character => <p>{character.name}</p>), (character => <img src={character.image}>)}
      
     
    </div>
  );
};

export default RickMory;
