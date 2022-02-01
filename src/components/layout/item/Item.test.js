import { render } from '@testing-library/react'

import Item from './Item'

import db from '../../../mock-db'

db.injectData([
  { id: 1, title: 'One', author: 'one', year: 1901 }
])

const song = db.getById(1)
const showKeys = ['title', 'year']

it('renders item', () => {
  const { container } = render(
    <Item item={song} showKeys={showKeys} />
  )

  expect(container).toMatchSnapshot()
})
