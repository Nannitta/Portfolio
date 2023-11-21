import PropTypes from 'prop-types';
import LinkGithub from '../ProjectsLinks/LinkGithub';
import LinkWeb from '../ProjectsLinks/LinkWeb';
import './projectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({projects, image}) => {
  console.log(projects);
  return (
    <li>
      <article className='project'>
        <div className='links'>
          <Link to={projects.github} target='_blank' title='Github'><LinkGithub/></Link>
          {projects.website ? <Link to={projects.website} target='_blank' title='Sitio Web'><LinkWeb/></Link> : null}
        </div>
        <div className='logo'><img src={image} alt={projects.image} /></div>
        <div className='languajes'>
          {
            projects.languajes.map((languaje, index) => { return <p key={index}>{languaje}</p>;})
          }
        </div>
        <h1>{projects.title}</h1>
        <p className='description'>{projects.description}</p>
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