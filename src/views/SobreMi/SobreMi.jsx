import GitHub from './Logos/GitHub';
import Gmail from './Logos/Gmail';
import Linkedin from './Logos/Linkedin';
import './sobremi.css';

const SobreMi = () => {
  return (
    <section id='Sobremi' className='sobremi'>
      <div className='img-gradient'>
        <div className="text-container">
          <h1>Hola, Soy <br /><span>Nair Gonzalez</span></h1>
          <h2 className='job'>Junior Web Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque,
            consectetur fuga aliquam ab voluptate suscipit quia sapiente recusandae
            placeat quas ipsum, id magnam ratione sint soluta explicabo cum ea illo libero.
            Quo iure ipsum molestias quae commodi totam ea reiciendis,
            laudantium vitae voluptatum error nihil modi, aspernatur nulla animi.
          </p>
          <div className="social-links">
            <GitHub/>
            <Gmail/>
            <Linkedin/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;