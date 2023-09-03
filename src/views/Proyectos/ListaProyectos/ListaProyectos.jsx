import CartaProyecto from '../CartaProyecto/CartaProyecto';
import PropTypes from 'prop-types';
import './listaProyectos.css';

const ListaProyectos = ({projects}) => {
  return (
    <ul className='projects-list'>
      {
        projects.map((project) => { return <CartaProyecto key={project.id} projects={project}/>;})
      }
    </ul>
  );
};

ListaProyectos.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languajes: PropTypes.array.isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default ListaProyectos;