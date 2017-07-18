# react-resolve-element

Resolves the properties `component`, `render` and `children` into a React element.

## Table of contents
 - [React](#react)
 - [The concept](#the-concept)
 - [API](#api)
   - [resolveElement()](#resolveelement)

## React

This package is to be used with React.
See [React](https://facebook.github.io/react/) for more details.

## The concept

Children can be passed using one of the following props:

* **component:ReactComponent**

  Creates a React node from the component with ownProps provided.
  This takes precendence over `render` and `children`.

* **render(ownProps):ReactNode**

  Should return a React node. The ownProps are passed as argument.
  This takes precendence over `children`.

* **children:ReactNode**

  Directly passed children.

This structure is inspired from [React Router's render methods](https://reacttraining.com/react-router/web/api/Route/Route-render-methods).

## API

### resolveElement()

Takes render methods and returns a React node.

```js
ReactNode = resolveElement(
  {
    component: ReactComponent,
    render: (ownProps) => ReactNode,
    children: ReactNode
  },
  props,
  defaultValue = null
);
```

### Function parameters

* **Render methods**

  Contains one of the render methods.
  See [The concept](#the-concept) for more information.

* **Props**

  The props which should be passed to the node if supported. This doesn't fully work with the `children` prop right now.

* **Default value**

  The value which should be returned if none of the supported render methods was supplied.
  This is set to `null` by default.

### Return value

Returns a `ReactNode` from the provided render method or `Default value` if no supported render method was supplied.
