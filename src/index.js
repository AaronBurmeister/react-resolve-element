import React, { cloneElement } from 'react'
import renderProps from './renderProps'

export default function resolveElement(
  { component, render, children } = {}, // eslint-disable-line react/prop-types
  props = {},
  defaultValue = null,
) {
  if (component) return (<component {...props} />)
  if (render) return (render(props))
  if (children) return (cloneElement(React.Children.only(children), props))

  return defaultValue
}

export { renderProps }
