import Item from './components/layout/item/Item'
import List from './components/layout/list/List'

import Song from './db'

const App = () => {
  return (
    <List
      items={Song.find()}
      keysToShow={['id', 'title', 'author', 'year']}
      resourceName='item'
      itemComponent={Item}
    />
  )
}

export default App
