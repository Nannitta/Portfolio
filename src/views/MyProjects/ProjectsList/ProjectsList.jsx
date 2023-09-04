import ProjectCard from '../ProjectCard/ProjectCard';
import PropTypes from 'prop-types';
import './projectsList.css';
import Zelda from '../../../assets/projectsImages/zelda.png';
import WeatherApp from '../../../assets/projectsImages/weatherApp.png';
import Rps from '../../../assets/projectsImages/rock-paper-scissors.png';

const ProjectsList = ({projects}) => {
  const logos = [Zelda, WeatherApp, Rps];
  return (
    <ul className='projects-list'>
      {
        projects.map((project, index) => { return <ProjectCard key={project.id} projects={project} image={logos[index]}/>;})
      }
    </ul>
  );
};

ProjectsList.propTypes = {
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

export default ProjectsList;