import Logo from "./Logo";
import MenuLink from "./MenuLink";


const Header = () => {
  return (
    <header>
      <Logo/>
      <nav>
        <MenuLink text={'Sobre mi'} linkId={'#Sobremi'}/>
        <MenuLink text={'Tecnologías'} linkId={'#Tecnologias'}/>
        <MenuLink text={'Proyectos'} linkId={'#Proyectos'}/>
      </nav>
    </header>
  )
}

export default Header;