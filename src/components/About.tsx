import React from 'react';
import '../assets/css/About.css'

const About: React.FC = () => {
    console.log('Rendering Home component');
  return (
    <div className='about'>
      <h2 className='title'>À propos</h2>
      <p className='texte'>Voici une page à propos de mon application.</p>
    </div>
  );
}

export default About;
