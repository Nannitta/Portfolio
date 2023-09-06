import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

import './menulink.css';

const MenuLink = ({ text, linkId }) => {
  return <li className='section-links'><HashLink to={`/${linkId}`}>{text}</HashLink></li>;
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkId: PropTypes.string.isRequired
};

export default MenuLink;