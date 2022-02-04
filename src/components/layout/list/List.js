import { Fragment } from 'react'
import { arrayOf, object, string, func } from 'prop-types'

const List = ({
  items,
  keysToShow,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <h3>{index + 1}</h3>
          <ItemComponent
            key={item.id}
            {...{ [resourceName]: item }}
            keysToShow={keysToShow}
          />
        </Fragment>
      ))}
    </>
  )
}

List.propTypes = {
  items: arrayOf(object).isRequired,
  keysToShow: arrayOf(string).isRequired,
  resourceName: string.isRequired,
  itemComponent: func.isRequired
}

export default List
