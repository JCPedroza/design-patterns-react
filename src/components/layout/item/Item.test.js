import { render } from '@testing-library/react'

import Item from './Item'

const itemData = { id: 1, title: 'One', author: 'Mario', year: 1926 }

const keysToShow = ['title', 'year']

it('renders item', () => {
  const { container } = render(
    <Item item={itemData} keysToShow={keysToShow} />
  )

  expect(container).toMatchSnapshot()
})
