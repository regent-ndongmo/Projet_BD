import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsBrush } from 'react-icons/bs';

import './BgChange.css';

const BgChange = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  // Fonction pour changer la couleur de fond
  const changeBackgroundColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  // Fonction pour générer une couleur aléatoire en format hexadécimal
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="container">

      <Button variant="primary" onClick={changeBackgroundColor}>
        <BsBrush /> Changer la couleur
      </Button>

      <style>
        {`
          body {
            background-color: ${backgroundColor};
            transition: background-color 0.5s ease;
          }
        `}
      </style>
    </div>
  );
};

export default BgChange;