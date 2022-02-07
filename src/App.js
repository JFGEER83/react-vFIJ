import React from 'react';
import './style.css';

import SubTitle from './SubTitle';
import Footer from './Footer';

export default function App() {
  const name = 'JF';
  const maListe = ['Nawfal', 'Fadel', 'JF', 'Olga', 'Kay', 'Benjamin'];
  const listBolo = ['Tomate', 'Viande hachée', 'Ail', 'Oignons', 'Spagheti'];
  const employees = [
    {
      prenom: 'Fadel',
      salaire: 2000,
    },
    {
      prenom: 'Giovanna',
      salaire: 200,
    },
  ];
  const majeur = false;
  const dansLeSecret = false;

  return (
    <div>
      <h1>YOYO {name}</h1>
      <p>Hello WOrld!</p>
      <SubTitle />
      <h2>liste prenom</h2>
      <ul>
        {maListe.map((prenom) => (
          <li>{prenom}</li>
        ))}
      </ul>
      <h2>liste ingrédients bolo</h2>
      <ul>
        {listBolo.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h2>liste objets employés</h2>
      <ul>
        {employees.map((employees) => (
          <li style={{ color: employees.salaire >= 2000 ? 'green' : 'red' }}>
            {' '}
            {/*coouleur salaire change si il est en dessous de 2000  */}
            {employees.prenom}-{employees.salaire}
          </li>
        ))}
      </ul>
      <h2>True False</h2>
      <h3>{majeur ? 'Bienvenue' : 'Désolé'}</h3>
      <h3>{dansLeSecret && "Le secret est qu'il n'y a pas de secret!"}</h3>

      <button>un super bouton</button>
      <Footer />
    </div>
  );
}
