import ProjectCard from '../ProjectCard/ProjectCard';
import PropTypes from 'prop-types';
import './projectsList.css';
import Zelda from '../../../assets/projectsImages/zelda.webp';
import WeatherApp from '../../../assets/projectsImages/weatherApp.webp';
import Rps from '../../../assets/projectsImages/rock-paper-scissors.webp';

const ProjectsList = ({projects, animation}) => {
  const logos = [Zelda, WeatherApp, Rps];

  return (
    <ul className={animation}>
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
  })).isRequired,
  image: PropTypes.string,
  animation: PropTypes.string
};

export default ProjectsList;