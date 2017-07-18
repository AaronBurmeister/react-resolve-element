import PropTypes from 'prop-types'

const renderProps = {
  component: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
}

export default renderProps
