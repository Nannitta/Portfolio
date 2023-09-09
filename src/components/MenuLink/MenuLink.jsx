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
      const [sobremi, , proyectos] = links;
     
      if (scrollY > 400 && scrollY < 900) {
        proyectos.classList.add('bg-links');
      } else {
        proyectos.classList.remove('bg-links');
      }
      
      if (scrollY > 620 && scrollY < 1150) {
        sobremi.classList.add('bg-links');    
      } else{
        sobremi.classList.remove('bg-links');        
      }
    }
    window.addEventListener('scroll', handleScrollY);

    return () => window.removeEventListener('scroll', handleScrollY);
  }, [scrollY]);

  return <li className='section-links'><HashLink to={`/${linkId}`}>{text}</HashLink></li>;
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkId: PropTypes.string.isRequired
};

export default MenuLink;