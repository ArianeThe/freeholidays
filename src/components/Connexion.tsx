import React from 'react';
import '../assets/css/Connexion.css'

const Connexion: React.FC = () => {
    console.log('Rendering Home component');
  return (
    <div className='connexion'>
      <h2 className='title'>Connexion utilisateur</h2>
      <p className='texte'>Ici tu te connectes pour accéder à plus d'information et si tu souhaites partager tes expériences</p>
    </div>
  );
}

export default Connexion;
