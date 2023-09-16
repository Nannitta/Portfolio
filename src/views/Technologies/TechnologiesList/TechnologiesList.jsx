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
    </ul>
  );
};

export default TechnologiesList;