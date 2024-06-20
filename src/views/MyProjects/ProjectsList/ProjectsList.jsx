import ProjectCard from '../ProjectCard/ProjectCard';
import PropTypes from 'prop-types';
import './projectsList.css';
import Zelda from '../../../assets/projectsImages/zelda.webp';
import WeatherApp from '../../../assets/projectsImages/weatherApp.webp';
import Rps from '../../../assets/projectsImages/rock-paper-scissors.webp';
import P2P from '../../../assets/projectsImages/p2p.webp';
import GeoQuiz from '../../../assets/projectsImages/geoquiz.webp';
import Pokedex from '../../../assets/projectsImages/pokedex.webp';
import Booklog from '../../../assets/projectsImages/booklog.webp';
import Aecc from '../../../assets/projectsImages/aecc.webp';
import UnderConstruction from '../../../assets/projectsImages/construccion.webp';
import CineSneak from '../../../assets/projectsImages/cinesneak.png';
import { useState } from 'react';

const ProjectsList = ({projects, animation}) => {
  const logos = [P2P, Aecc, CineSneak, UnderConstruction, Booklog, Pokedex, GeoQuiz, Rps, Zelda, WeatherApp];
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleClikLoadMore = () => {
    setVisibleProjects(projects.lenght);
  };

  return (
    <>
      <ul className={animation}>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={project.id} projects={project} image={logos[index]} />
        ))}
      </ul>
      {
        visibleProjects <= projects.length
          ? <button className='load-more animation' onClick={handleClikLoadMore}>VER MÁS</button>  
          : null 
      }
    </>
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