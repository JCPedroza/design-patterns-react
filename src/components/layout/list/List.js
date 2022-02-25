import { Fragment } from 'react'
import { arrayOf, object, string, func } from 'prop-types'

const List = ({
  dataArray,
  showEntries,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {dataArray.map((data, index) => (
        <Fragment key={data.id}>
          <h3>{index + 1}</h3>
          <ItemComponent
            {...{ [resourceName]: data }}
            showEntries={showEntries}
          />
        </Fragment>
      ))}
    </>
  )
}

List.propTypes = {
  dataArray: arrayOf(object).isRequired,
  showEntries: arrayOf(string).isRequired,
  resourceName: string.isRequired,
  itemComponent: func.isRequired
}

export default List
