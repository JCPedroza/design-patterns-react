import Item from './components/layout/item/Item'

import Song from './db'

const App = () => {
  const song = Song.getById(1)
  return <Item item={song} keysToShow={['author', 'year']} />
}

export default App
