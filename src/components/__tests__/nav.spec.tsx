import React from 'react'
import renderer from 'react-test-renderer'
import Nav from '../nav'

test('renders with correct styles', () => {
  const tree = renderer.create(<Nav />).toJSON()
  expect(tree).toMatchSnapshot()
})
