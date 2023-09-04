import Projects from '../../views/MyProjects/Projects';
import AboutMe from '../../views/AboutMe/Aboutme';
import Technologies from '../../views/Technologies/Technologies';
import MenuLink from '../MenuLink/MenuLink';
import './main.css';

const Main = () => {
  return (
    <main>
      <nav>
        <ul className='section-menu'>
          <MenuLink text={'Sobre mi'} linkId={'#Sobremi'}/>
          <MenuLink text={'Tecnologías'} linkId={'#Tecnologias'}/>
          <MenuLink text={'Proyectos'} linkId={'#Proyectos'}/>
        </ul>
      </nav>
      <AboutMe/>
      <Technologies/>
      <Projects/>
    </main>
  );
};

export default Main;