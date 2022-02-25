import { arrayOf, object, string } from 'prop-types'

const Item = ({ data = {}, showEntries }) => {
  const itemProxy = new Proxy(data, { ownKeys: () => showEntries })
  const itemToShow = Object.entries(Object.assign({}, itemProxy))

  return (
    <ul>
      {itemToShow.map(([key, val]) =>
        <li key={key}>{key}: {val}</li>)}
    </ul>
  )
}

Item.propTypes = {
  data: object,
  showEntries: arrayOf(string).isRequired
}

export default Item
