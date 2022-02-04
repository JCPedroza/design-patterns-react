/**
 * Schema-less, no validation, no authentication, singleton mock database.
 */

/**
 * Data that the collection holds.
 */
const data = [
  { id: 14, title: 'One', author: 'Mario', year: 1926, time: 123 },
  { id: 38, title: 'Tuesday', author: 'Fernanda', year: 2013, time: 234 },
  { id: 23, title: 'Blue', author: 'Unknown', year: 1926, time: 428 },
  { id: 49, title: 'Untitled', author: 'Radiohead', year: 2003, time: 357 }
]

const isMatch = (target, filter) => {
  return Object.keys(filter).every(key => {
    if (typeof filter[key] === 'object') {
      return isMatch(target[key], filter[key])
    }

    return target[key] === filter[key]
  })
}

const getIndexOfId = (id) => {
  const parsedId = parseInt(id, 10)
  const index = data.findIndex(point => point.id === parsedId)
  if (parsedId === -1) throw new Error(`Cannot find id: ${id}`)
  return index
}

const injectData = (newData) =>
  data.splice(0, data.length, ...newData)

const find = (filter) =>
  filter ? data.filter(song => isMatch(song, filter)) : data

const getById = (id) =>
  data.find(song => song.id === id)

const create = (dataPoint) =>
  data[data.push(dataPoint) - 1]

const getByIdAndReplace = (id, replacement) =>
  data.splice(getIndexOfId(id), 1, replacement)[0]

const getByIdAndUpdate = (id, update) => {
  const index = getIndexOfId(id)
  data[index] = { ...data[index], ...update }
  return data[index]
}

const getByIdAndDelete = (id) =>
  data.splice(getIndexOfId(id), 1)[0]

const api = {
  injectData,
  find,
  getById,
  create,
  getByIdAndReplace,
  getByIdAndUpdate,
  getByIdAndDelete
}

export default api
