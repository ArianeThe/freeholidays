import React from 'react';
import '../assets/css/Home.css'

const Home: React.FC = () => {
    console.log('Rendering Home component');
  return (
    <div className='home'>
      <h2 className='title'>Accueil</h2>
      <p className='texte'>Bienvenu e sur mon application !</p>
    </div>
  );
}

export default Home;
