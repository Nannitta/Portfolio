import { Link } from 'react-router-dom';
import './logos.css';

const Figma = () => {
  return (
    <Link to={'https://www.figma.com/@nairgonzalez'} target='_blank' className='social-logo' title='Figma Community'>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
        <path fill="#212529" d="M190.15 96A44 44 0 0 0 160 20H88a44 44 0 0 0-30.15 76a43.9 43.9 0 0 0 1.23 65.12A48 48 0 
      1 0 140 196v-28.83A44 44 0 0 0 190.15 96M180 64a20 20 0 0 1-20 20h-20V44h20a20 20 0 0 1 20 20M68 64a20 20 0 0 1 
      20-20h28v40H88a20 20 0 0 1-20-20m20 84a20 20 0 0 1 0-40h28v40zm28 48a24 24 0 1 1-24-24h24Zm44-48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"/>
      </svg>
    </Link>
  );
};

export default Figma;