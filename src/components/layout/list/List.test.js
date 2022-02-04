import { render } from '@testing-library/react'

import Item from '../item/Item'
import List from './List'

const items = [
  { id: 14, title: 'One', author: 'Mario', year: 1926, time: 123 },
  { id: 38, title: 'Tuesday', author: 'Fernanda', year: 2013, time: 234 },
  { id: 49, title: 'Untitled', author: 'Radiohead', year: 2003, time: 357 }
]

const keysToShow = ['id', 'title', 'author', 'year']
const resourceName = 'item'

it('renders a list', () => {
  const { container } = render(
    <List
      items={items}
      keysToShow={keysToShow}
      resourceName={resourceName}
      itemComponent={Item}
    />
  )

  expect(container).toMatchSnapshot()
})
