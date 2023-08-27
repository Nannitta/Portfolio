import PropTypes from 'prop-types';

const SocialLink = ({ iconName }) => {
  return (
    <a href="">
      <img src={`icons/social/${iconName}.svg`} alt={iconName} />
    </a>
  )
}

SocialLink.propTypes = {
  iconName: PropTypes.oneOf(['github', 'gmail', 'linkedin']).isRequired
}

export default SocialLink;