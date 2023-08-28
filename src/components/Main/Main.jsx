import Proyectos from '../../views/Proyectos/Proyectos';
import SobreMi from '../../views/SobreMi/SobreMi';
import Tecnologias from '../../views/Tecnologias/Tecnologias';
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
      <SobreMi/>
      <Tecnologias/>
      <Proyectos/>
    </main>
  );
};

export default Main;