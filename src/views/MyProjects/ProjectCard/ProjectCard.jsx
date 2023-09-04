import PropTypes from 'prop-types';
import LinkGithub from '../ProjectsLinks/LinkGithub';
import LinkWeb from '../ProjectsLinks/LinkWeb';
import './projectCard.css';

const ProjectCard = ({projects, image}) => {
  return (
    <li>
      <article className='project'>
        <div className='links'>
          <a href={projects.github} target='_blank' rel='noreferrer'><LinkGithub/></a>
          <a href={projects.website} target='_blank' rel='noreferrer'><LinkWeb/></a>
        </div>
        <div><img src={image} alt={projects.image} /></div>
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

ProjectCard.propTypes = {
  projects: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languajes: PropTypes.array.isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string,
    image: PropTypes.string.isRequired
  }).isRequired,
  image: PropTypes.string.isRequired
};

export default ProjectCard;