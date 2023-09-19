import './projects.css';
import ProjectsList from './ProjectsList/ProjectsList';
import MyProjects from '../../assets/proyectos.json';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const animation = inView ? 'animate__fadeInUp projects-list': 'projects-list';

  return (
    <section id="Proyectos" className='projects'>
      <h2 ref={ref}>PROYECTOS</h2>
      <ProjectsList projects={MyProjects} animation={animation}/>
    </section>
  );
};

export default Projects;