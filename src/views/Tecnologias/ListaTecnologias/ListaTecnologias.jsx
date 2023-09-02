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
import './listatecnologias.css';

const ListaTecnologias = () => {
  return (
    <ul className='skills'>
      <Html/>
      <Css/>
      <JavaScript/>
      <MySQL/>
      <Node/>
      <Git/>
      <Postman/>
      <React/>
      <Vite/>
      <Bootstrap/>
    </ul>
  );
};

export default ListaTecnologias;