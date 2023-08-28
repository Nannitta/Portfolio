import './sobremi.css';
import SocialLink from './SocialLink';

const SobreMi = () => {
  return (
    <section id='#Sobremi' className='sobremi'>
      <div className='img-gradient'>
        <div className="text-container">
          <h1>Hola, Soy <br /><span>Nair González</span></h1>
          <p>Junior Web Developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque,
            consectetur fuga aliquam ab voluptate suscipit quia sapiente recusandae
            placeat quas ipsum, id magnam ratione sint soluta explicabo cum ea illo libero.
            Quo iure ipsum molestias quae commodi totam ea reiciendis,
            laudantium vitae voluptatum error nihil modi, aspernatur nulla animi.
          </p>
          <div className="social-links">
            <SocialLink iconName={'github'}/>
            <SocialLink iconName={'linkedin'}/>
            <SocialLink iconName={'gmail'}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;