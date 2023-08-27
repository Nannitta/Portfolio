import PropTypes from 'prop-types';

const MenuLink = ({ text, linkId }) => {
  return <a href={linkId}>{text}</a>
}

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkId: PropTypes.string.isRequired
}

export default MenuLink;