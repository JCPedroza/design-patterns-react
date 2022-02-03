import { render } from '@testing-library/react'

import Item from './Item'

import db from '../../../db'

const itemData = { id: 1, title: 'One', author: 'Mario', year: 1926 }

jest.mock('../../../db', () => ({
  ...jest.requireActual('../../../db'),
  getById: jest.fn().mockReturnValue(itemData)
}))

const song = db.getById(1)
const keysToShow = ['title', 'year']

it('renders item', () => {
  const { container } = render(
    <Item item={song} keysToShow={keysToShow} />
  )

  expect(container).toMatchSnapshot()
})
