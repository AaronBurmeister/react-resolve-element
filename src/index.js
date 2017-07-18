import React from 'react'

export default function resolveElement(
  { component, render, children } = {}, // eslint-disable-line react/prop-types
  props = {},
  defaultValue = null,
) {
  if (component) return (<component {...props} />)
  if (render) return (render(props))
  if (children) {
    if (typeof children === 'function') return (children(props))
    if (!Array.isArray(children) || children.length) return (React.Children.only(children))
  }

  return defaultValue
}

export renderProps from './renderProps'
