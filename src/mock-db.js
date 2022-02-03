/**
 * Schema-less, no validation, no authentication, singleton mock database.
 */

/**
 * Data that the collection holds.
 */
const data = [
  { id: 1, title: 'One', author: 'Mario', year: 1926 },
  { id: 2, title: 'Tuesday', author: 'Fernanda', year: 2013 },
  { id: 3, title: 'Blue', author: 'Unknown', year: 1926 }
]

const isMatch = (target, filter) => {
  return Object.keys(filter).every(key => {
    if (typeof filter[key] === 'object') {
      return isMatch(target[key], filter[key])
    }

    return target[key] === filter[key]
  })
}

const findIndexOfId = (id) => {
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

const findByIdAndReplace = (id, replacement) =>
  data.splice(findIndexOfId(id), 1, replacement)[0]

const findByIdAndUpdate = (id, update) => {
  const index = findIndexOfId(id)
  data[index] = { ...data[index], ...update }
  return data[index]
}

const findByIdAndDelete = (id) =>
  data.splice(findIndexOfId(id), 1)[0]

const api = {
  injectData,
  find,
  getById,
  create,
  findByIdAndReplace,
  findByIdAndUpdate,
  findByIdAndDelete
}

export default api
