import React from 'react'
import renderProps from './renderProps'

export default function resolveElement(
  { component, render, children } = {}, // eslint-disable-line react/prop-types
  props = {},
  defaultValue = null,
) {
  if (component) return (<component {...props} />)

  if (render) return (render(props))

  if (children) {
    return React.Children.map(
      children,
      (child) => (React.isValidElement(child) ? React.cloneElement(child, props) : child)
    )
  }

  return defaultValue
}

export { renderProps }
