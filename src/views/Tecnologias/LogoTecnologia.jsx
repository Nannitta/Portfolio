import PropTypes from 'prop-types';

const LogoTecnologia = ({ iconTechnology }) => {
  return (
    <li>
      <img src={`icons/technologies/${iconTechnology}.svg`} alt={iconTechnology} />
    </li>
  )
}

LogoTecnologia.propTypes = {
  iconTechnology: PropTypes.oneOf(['html', 'css', 'javascript', 'mysql', 'node', 'react', 'vite', 'bootstrap', 'git', 'postman']).isRequired
}

export default LogoTecnologia;