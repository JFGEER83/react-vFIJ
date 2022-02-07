import React from 'react';
import './style.css';

import SubTitle from './SubTitle';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <h1>YOYO</h1>
      <p>Hello WOrld!</p>
      <SubTitle />
      <ul>
        <li>une liste</li>
      </ul>
      <button>un super bouton</button>
      <Footer />
    </div>
  );
}
