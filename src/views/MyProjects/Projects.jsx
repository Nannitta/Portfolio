import './projects.css';
import ProjectsList from './ProjectsList/ProjectsList';
import MyProjects from '../../assets/proyectos.json';

const Projects = () => {
  return (
    <section id="Proyectos" className='projects'>
      <h2>PROYECTOS</h2>
      <ProjectsList projects={MyProjects}/>
    </section>
  );
};

export default Projects;