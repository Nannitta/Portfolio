import PropTypes from 'prop-types';
import './menulink.css';

const MenuLink = ({ text, linkId }) => {
  return <li className='section-links'><a href={linkId}>{text}</a></li>;
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkId: PropTypes.string.isRequired
};

export default MenuLink;