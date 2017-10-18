import PropTypes from 'prop-types'
import React from 'react'

const ChildrenWrapper = ({ container, children, ...props }) => React.createElement(
  container,
  null,
  React.Children.map(
    children,
    (child) => (React.isValidElement(child) ? React.cloneElement(child, props) : child)
  )
)

ChildrenWrapper.propTypes = {
  container: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  children: PropTypes.node,
}

export default (children, container = 'div') => {
  if (!children) return children

  if (React.isValidElement(children)) return children
  return (
    <ChildrenWrapper container={container}>
      {React.Children.toArray(children)}
    </ChildrenWrapper>
  )
}
