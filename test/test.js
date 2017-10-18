/* eslint-disable no-unused-expressions */

import React from 'react'
import { expect } from 'chai'

import resolveElement from '../'

describe('react-resolve-element', () => {
  it('should export the resolveElement function', done => {
    expect(resolveElement).to.exist
    expect(resolveElement).to.be.a('function')
    done()
  })

  describe('resolveElement()', () => {
    describe('with component prop', () => {
      it('should return a React component if component is provided', done => {
        expect(resolveElement({ component: () => null })).to.exist
        done()
      })

      it('should return the component even if render or children is provided', done => {
        const children = (<span>React text 2</span>)
        const result = resolveElement(
          { component: () => null, render: () => 'React text', children }
        )
        expect(result).to.exist
        expect(result).to.not.equal('React text')
        expect(result).to.not.equal(children)
        done()
      })
    })

    describe('with render prop', () => {
      it('should return the result of render() if render is provided', done => {
        expect(resolveElement({ render: () => 'React text' })).to.equal('React text')
        done()
      })

      it('should return the result of render() even if children is provided', done => {
        const children = (<span>React text 2</span>)
        expect(resolveElement({ render: () => 'React text', children })).to.equal('React text')
        done()
      })
    })

    describe('with children prop', () => {
      it('should return one child as is if provided', done => {
        const children = (<span>React text 2</span>)
        expect(resolveElement({ children })).to.exist
        done()
      })

      it('should return multiple children as an array if provided', done => {
        const children = [<span>Child A</span>, 'Child B', <span>Child C</span>]
        expect(resolveElement({ children })).to.have.length(3)
        done()
      })
    })

    it('returns the defaultProp if neither component, render nor children are provided', done => {
      expect(resolveElement({}, {}, 'default')).to.equal('default')
      done()
    })

    it('accepts undefined props', done => {
      expect(resolveElement).to.not.throw
      done()
    })
  })
})
