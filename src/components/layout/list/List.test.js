import { render } from '@testing-library/react'

import Item from '../item/Item'
import List from './List'

const dataArray = [
  { id: 14, title: 'One', author: 'Mario', year: 1926, time: 123 },
  { id: 38, title: 'Tuesday', author: 'Fernanda', year: 2013, time: 234 },
  { id: 49, title: 'Untitled', author: 'Radiohead', year: 2003, time: 357 }
]

const showEntries = ['title', 'author', 'year', 'time']
const resourceName = 'dataArray'

const listProps = {
  dataArray,
  showEntries,
  resourceName,
  itemComponent: Item
}

describe('List component', () => {
  it('renders items as a list', () => {
    const { container } = render(<List {...listProps} />)
    expect(container).toMatchSnapshot()
  })
})
