import Item from './components/layout/item/Item'

import Song from './mock-db'

const App = () => {
  const song = Song.findById(1)
  return <Item item={song} keysToShow={['author', 'year']} />
}

export default App
