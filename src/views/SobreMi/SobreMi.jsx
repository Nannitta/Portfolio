import fotoPersnal from '../../assets/foto_personal.png';
import SocialLink from './SocialLink';

const SobreMi = () => {
  return (
    <section id='#Sobremi'>
      <p>Hola, Soy <span>Nair González</span></p>
      <p>Junior Web Developer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque, 
        consectetur fuga aliquam ab voluptate suscipit quia sapiente recusandae 
        placeat quas ipsum, id magnam ratione sint soluta explicabo cum ea illo libero. 
        Quo iure ipsum molestias quae commodi totam ea reiciendis, 
        laudantium vitae voluptatum error nihil modi, aspernatur nulla animi.
      </p>
      <SocialLink iconName={'github'}/>
      <SocialLink iconName={'linkedin'}/>
      <SocialLink iconName={'gmail'}/>
      <img src={fotoPersnal} alt="Foto personal" />
    </section>
  )
}

export default SobreMi;