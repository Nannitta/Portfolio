import Html from '../Logos/Html';
import Css from '../Logos/Css';
import JavaScript from '../Logos/JavaScript';
import MySQL from '../Logos/MySQL';
import Node from '../Logos/Node';
import Git from '../Logos/Git';
import Postman from '../Logos/Postman';
import React from '../Logos/React';
import Vite from '../Logos/Vite';
import Bootstrap from '../Logos/Bootstrap';
import Figma from '../Logos/Figma';
import Tailwind from '../Logos/Tailwind';
import TypeScript from '../Logos/TypeScript';
import './technologiesList.css';

const TechnologiesList = () => {
  return (
    <ul className='skills'>
      <li><Html/></li>
      <li><Css/></li>
      <li><JavaScript/></li>
      <li><MySQL/></li>
      <li><Node/></li>
      <li><Git/></li>
      <li><Postman/></li>
      <li><React/></li>
      <li><Vite/></li>
      <li><Bootstrap/></li>
      <li><Figma/></li>
      <li><Tailwind/></li>
      <li><TypeScript/></li>
    </ul>
  );
};

export default TechnologiesList;