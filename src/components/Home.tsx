import React from 'react';
import '../assets/css/Home.css'

const Home: React.FC = () => {
    console.log('Rendering Home component');
  return (
    <div className='home'>
      <h2 className='title'>Free Holidays</h2>

barre de recherche

      <p className='texte'>Bienvenu-e sur LE site qui te permettre de trouver la location pour tes vacances, sans avoir à te soucier des détails.
      </p>
      <p className='texte'>Est-ce que l'hébergement est bien PMR ?
        Est-ce que la douche est bien à l'italienne ?
        Est-ce que la vue est bien sur la mer avec un balcon accessible ?
      </p>
      <p className='texte'>Choisi ta destination, et tu pourras choisir le mlieu qui te convient le mieux !
      </p>
    </div>
  );
}

export default Home;
