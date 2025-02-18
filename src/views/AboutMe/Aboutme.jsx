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
          <h2 className='job'>Full Stack Developer</h2>
          <p className='description'>
            Apasionada por transformar ideas en experiencias digitales
            impactantes. Desarrollo soluciones innovadoras con un enfoque
            técnico y creativo, liderando tanto el front-end como el back-end.
            Especializada en crear interfaces intuitivas y funcionales, colaboro en
            equipos ágiles para entregar productos de alta calidad que superan
            expectativas.
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