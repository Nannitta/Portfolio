import ProjectCard from '../ProjectCard/ProjectCard';
import PropTypes from 'prop-types';
import './projectsList.css';

const ProjectsList = ({projects}) => {
  return (
    <ul className='projects-list'>
      {
        projects.map((project) => { return <ProjectCard key={project.id} projects={project}/>;})
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