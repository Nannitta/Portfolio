import PropTypes from 'prop-types';
import LinkGithub from '../LinksProyecto/LinkGithub';
import LinkWeb from '../LinksProyecto/LinkWeb';
import './cartaProyecto.css';

const CartaProyecto = ({projects}) => {
  return (
    <li>
      <article className='project'>
        <div className='links'>
          <a href={projects.github} target='_blank' rel='noreferrer'><LinkGithub/></a>
          <a href={projects.website} target='_blank' rel='noreferrer'><LinkWeb/></a>
        </div>
        <img src={projects.image} alt="Portada proyecto" />
        <div className='languajes'>
          {
            projects.languajes.map((languaje, index) => { return <p key={index}>{languaje}</p>;})
          }
        </div>
        <h1>{projects.title}</h1>
        <p>{projects.description}</p>
      </article>
    </li>
  );
};

CartaProyecto.propTypes = {
  projects: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languajes: PropTypes.array.isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default CartaProyecto;