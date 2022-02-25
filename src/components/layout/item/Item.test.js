import { render } from '@testing-library/react'

import Item from './Item'

const data = { id: 1, title: 'One', author: 'Mario', year: 1926 }
const showEntries = ['title', 'year']
const itemProps = { data, showEntries }

describe('Item component', () => {
  it('renders item data', () => {
    const { container } = render(<Item {...itemProps} />)
    expect(container).toMatchSnapshot()
  })
})
