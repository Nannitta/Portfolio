import GitHub from './Logos/GitHub';
import Gmail from './Logos/Gmail';
import Linkedin from './Logos/Linkedin';
import cv from '../../assets/cv.pdf';
import './aboutme.css';
import Figma from './Logos/Figma';

const AboutMe = () => {
  return (
    <section id='Sobremi' className='sobremi'>
      <div className='img-gradient'>
        <div className="text-container">
          <h1>Hola, Soy <br /><span>Nair Gonzalez</span></h1>
          <h2 className='job'>Junior Web Developer</h2>
          <p className='description'>
          Me encanta diseñar, innovar y experimentar. Soy una persona entusiasta
          a la cual le motiva afrontar nuevos retos y aprender nuevas habilidades.
          Programar me ha enseñado que los errores son oportunidades para aprender
          y que me encuentro en un mundo de posibilidades infinitas.
          No dudes en ponerte en contacto si sientes que puedo ser de ayuda en tu búsqueda.
          </p>
          <div className="social-links">
            <button><a href={cv} download title='Descargar CV' className='cv'>Descargar CV</a></button>
            <Figma/>
            <GitHub/>
            <Gmail/>
            <Linkedin/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;