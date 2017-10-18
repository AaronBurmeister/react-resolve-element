import PropTypes from 'prop-types'
import React from 'react'

const ArrayChildrenWrapper = ({ container, children, ...props }) => React.createElement(
  container,
  null,
  React.Children.map(
    children,
    (child) => (React.isValidElement(child) ? React.cloneElement(child, props) : child)
  )
)

ArrayChildrenWrapper.propTypes = {
  container: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  children: PropTypes.node,
}

export default (children, container = 'div') => {
  if (!children) return children

  if (React.Children.count(children) === 1) return React.Children.only(children)
  return (
    <ArrayChildrenWrapper container={container}>
      {React.Children.toArray(children)}
    </ArrayChildrenWrapper>
  )
}
