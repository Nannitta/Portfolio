import TechnologiesList from './TechnologiesList/TechnologiesList';
import './technologies.css';

const Technologies = () => {
  return (
    <section id="Tecnologias" className='technologies'>
      <h2>TECNOLOGÍAS</h2>
      <p>« El código es el tejido que une las ideas en el mundo digital »</p>
      <TechnologiesList/>
    </section>
  );
};

export default Technologies;