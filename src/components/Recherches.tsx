import React from 'react';
import Search from './Search';
import '../assets/css/Recherches.css'

const Recherches: React.FC = () => {
    console.log('Rendering Home component');
  return (
    <div className='home'>
      <h2 className='title'>Où Aller ?</h2>



      <p className='texte'>Voici la page où tu pourras chercher selon tes aspirations !
      </p>

      <Search/>
      
    </div>

  );
}

export default Recherches;