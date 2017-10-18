import React from 'react'
import renderProps from './renderProps'
import supportChildren from './supportChildren'

export default function resolveElement(
  { component, render, children } = {}, // eslint-disable-line react/prop-types
  props = {},
  defaultValue = null
) {
  if (component) return React.createElement(component, props)

  if (render) return render(props)

  if (children) {
    const ownChildren = React.Children.map(
      children,
      (child) => (React.isValidElement(child) ? React.cloneElement(child, props) : child)
    )

    switch (ownChildren.length) {
      case 0: return null
      case 1: return ownChildren[0]
      default: return ownChildren
    }
  }

  return defaultValue
}

export {
  renderProps,
  supportChildren,
}
