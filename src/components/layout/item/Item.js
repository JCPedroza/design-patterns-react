import { arrayOf, object, string } from 'prop-types'

const buildItemToShow = (item, keysToShow) => {
  const itemProxy = new Proxy(item, { ownKeys: () => keysToShow })
  return Object.entries(Object.assign({}, itemProxy))
}

const Item = ({ item, keysToShow }) => {
  const itemToShow = buildItemToShow(item, keysToShow)

  return (
    <>
      <ul>
        {itemToShow.map(([key, value]) => <li key={key}>{key}: {value}</li>)}
      </ul>
    </>
  )
}

Item.propTypes = {
  item: object.isRequired,
  keysToShow: arrayOf(string).isRequired
}

export default Item
