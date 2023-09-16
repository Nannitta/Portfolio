import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import './menulink.css';

const MenuLink = ({ text, linkId }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScrollY () {
      setScrollY(window.scrollY);
      const links = document.querySelectorAll('.section-links');
      const technologiesSection = document.querySelector('#Tecnologias');
      const [sobremi, , proyectos] = links;
      
      const colisionVerify = () => {
        const rectSobremi = sobremi.getBoundingClientRect();
        const rectProyectos = proyectos.getBoundingClientRect();
        const rectTechnologiesSection = technologiesSection.getBoundingClientRect();

        if (rectTechnologiesSection.bottom >= rectSobremi.top && rectTechnologiesSection.top <= rectSobremi.bottom) {
          sobremi.classList.add('bg-links');
        } else {
          sobremi.classList.remove('bg-links');  
        }
        
        if (rectTechnologiesSection.bottom >= rectProyectos.top && rectTechnologiesSection.top <= rectProyectos.bottom) {
          proyectos.classList.add('bg-links');
        } else {
          proyectos.classList.remove('bg-links');
        }
      };
      
      colisionVerify();
    }
    window.addEventListener('scroll', handleScrollY);

    return () => window.removeEventListener('scroll', handleScrollY);
  }, [scrollY]);

  return <li className='section-links'><HashLink to={`/${linkId}`} title={text}>{text}</HashLink></li>;
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkId: PropTypes.string.isRequired
};

export default MenuLink;