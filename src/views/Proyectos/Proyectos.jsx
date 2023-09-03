import './proyectos.css';
import ListaProyectos from './ListaProyectos/ListaProyectos';
import MyProjects from '../../assets/proyectos.json';

const Proyectos = () => {
  return (
    <section id="Proyectos" className='projects'>
      <h2>PROYECTOS</h2>
      <ListaProyectos projects={MyProjects}/>
    </section>
  );
};

export default Proyectos;