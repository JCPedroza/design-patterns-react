import PropTypes from 'prop-types'

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
  item: PropTypes.object.isRequired,
  keysToShow: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Item
