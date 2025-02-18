import Html from '../Logos/Html';
import Css from '../Logos/Css';
import JavaScript from '../Logos/JavaScript';
import MySQL from '../Logos/MySQL';
import Node from '../Logos/Node';
import Git from '../Logos/Git';
import Postman from '../Logos/Postman';
import React from '../Logos/React';
import Cypress from '../Logos/Cypress';
import Next from '../Logos/Next';
import Figma from '../Logos/Figma';
import Tailwind from '../Logos/Tailwind';
import TypeScript from '../Logos/TypeScript';
import './technologiesList.css';
import Jest from '../Logos/Jest';

const TechnologiesList = () => {
  return (
    <ul className='skills'>
      <li className='skills-list'><Html/>HTML</li>
      <li className='skills-list'><Css/>CSS</li>
      <li className='skills-list'><JavaScript/>JavaScript</li>
      <li className='skills-list'><MySQL/>MySQL</li>
      <li className='skills-list'><Node/>Node.js</li>
      <li className='skills-list'><Git/>Git</li>
      <li className='skills-list'><React/>React</li>
      <li className='skills-list'><Next/>Next.js</li>
      <li className='skills-list'><Postman/>Postman</li>
      <li className='skills-list'><Figma/>Figma</li>
      <li className='skills-list'><Tailwind/>Tailwind</li>
      <li className='skills-list'><TypeScript/>TypeScript</li>
      <li className='skills-list'><Jest/>Jest</li>
      <li className='skills-list'><Cypress/>Cypress</li>
    </ul>
  );
};

export default TechnologiesList;