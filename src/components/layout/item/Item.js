import PropTypes from 'prop-types'

const Item = ({ item, showKeys }) => {
  const accumulator = {}

  showKeys.forEach(key => {
    if (key in item) accumulator[key] = item[key]
  })

  const itemToShow = Object.entries(accumulator)

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
  showKeys: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Item
