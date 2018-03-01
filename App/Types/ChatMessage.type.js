import PropTypes from 'prop-types'
export default PropTypes.shape({
  message: PropTypes.string.isRequired,
  user_email: PropTypes.string.isRequired,
})
