/**
 * Retrieves a nested value from within an object given a string path.
 * @param path eg. path.to[0].my[1].object
 * @param data An object to traverse
 * @returns {*}
 */
function getMappedValue(mapping, data, resolve) {
  resolve = (typeof resolve === 'boolean') ? resolve : false

  let pathMapping = null
  // If the mapping provided is a simple string ie: MY_FIELD: 'myField'
  if (typeof mapping === 'string' && mapping.length > 0) {
    resolve = true // Simple mappings must be resolved
    pathMapping = mapping
  }

  mapping = mapping || null
  if (mapping !== null) {
    if (mapping.hasOwnProperty('property') && mapping.hasOwnProperty('value')) {
      pathMapping = (resolve === false) ? mapping.property : mapping.value
    }
  }

  if (pathMapping !== null) {
    return getPathMappedValue(pathMapping, data)
  }
}

function getPathMappedValue(path, data) {
  if (typeof data === 'undefined' || data === null) {
    return null
  }
  // Access static methods using constructor property
  let chunks = getObjectPath(path)

  let arrayExpr = /(\[\]|\[(.*)\])$/g
  let isArray = false

  let currentChunk = chunks.shift() // Shift the first element off the array
  isArray = arrayExpr.test(currentChunk)

  /*if (isArray) {
   console.log(currentChunk + ' is an array')
   } else {
   console.log(currentChunk + ' is not an array')
   }*/

  if (chunks.length > 0) {
    // console.log('processing path chunk: ' + currentChunk)
    let prop = currentChunk

    if (isArray) {
      // Bust the [] off the string so we're left with just the property key
      prop = prop.replace(arrayExpr, '')

      // Get the index of the array item we're targeting
      // Not sure if there's ever a case where we wouldn't use an index (myProp[])? How would that work?
      let arrIdx = parseInt(arrayExpr.exec(currentChunk)[2]) // Just get the number
      // console.log(JSON.stringify(data[prop][arrIdx]))

      // IMPORTANT! Re-escape the chunks before recursing or the result will not be what you expected
      chunks = chunks.map(chunk => {
        return chunk.replace('.', '\\\\.')
      })

      if (data[prop] instanceof Array && data[prop].length > 0) {
        return getPathMappedValue(chunks.join('.'), data[prop][arrIdx])
      }
    }

    // console.log(JSON.stringify(data[prop]))
    return getPathMappedValue(chunks.join('.'), data[prop])
  } else {
    return data[currentChunk]
  }
}

/**
 * Sets a nested value within an object using a given string path.
 * @param path
 * @param data
 * @returns {*}
 */
function setMappedValue(path, data, value) {
  if (typeof data === 'undefined' || data === null) {
    return null
  }
  // Access static methods using constructor property
  let chunks = getObjectPath(path)

  let arrayExpr = /(\[\]|\[(.*)\])$/g
  let isArray = false

  let currentChunk = chunks.shift() // Shift the first element off the array
  isArray = arrayExpr.test(currentChunk)

  /*if (isArray) {
   console.log(currentChunk + ' is an array')
   } else {
   console.log(currentChunk + ' is not an array')
   }*/

  if (chunks.length > 0) {
    // console.log('processing path chunk: ' + currentChunk)
    let prop = currentChunk

    if (isArray) {
      // Bust the [] off the string so we're left with just the property key
      prop = prop.replace(arrayExpr, '')

      // Get the index of the array item we're targeting
      // Not sure if there's ever a case where we wouldn't use an index (myProp[])? How would that work?
      let arrIdx = parseInt(arrayExpr.exec(currentChunk)[2]) // Just get the number
      // console.log(JSON.stringify(data[prop][arrIdx]))

      // IMPORTANT! Re-escape the chunks before recursing or the result will not be what you expected
      chunks = chunks.map(chunk => {
        return chunk.replace('.', '\\\\.')
      })

      setMappedValue(chunks.join('.'), data[prop][arrIdx], value)
    } else {
      // console.log(JSON.stringify(data[prop]))
      setMappedValue(chunks.join('.'), data[prop], value)
    }

  } else {
    data[currentChunk] = value
  }
}

function getObjectPath(str) {
  // ([^\\]) Negative capturing group to make sure we don't pick up escape slashes
  // (\\\\)* Match backslash character
  // \. Grab any unescaped dots

  if (!(typeof str === 'string')) {
    throw new Error('Invalid object path, getObjectPath expected a string')
  }

  let merged = []

  // Credits to https://github.com/wankdanker/node-object-mapper/blob/master/src/set-key-value.js for this approach to parsing object paths
  let dotExpr = /([^\\])(\\\\)*\./g // Matches all unescaped dots in the provided string
  let chunks = str.split(dotExpr) // Explode the string into an array of path chunks

  for (let i = 0; i < chunks.length; i++) {
    if ((i - 1) % 3 === 0) {
      // Every third match is the character of the first group [^\\] which needs to be merged in again
      // That comment doesn't really make sense... let's work on it eh?
      let tmpKey = chunks[i - 1] + chunks[i]
      merged.push(tmpKey.replace('\\.', '.'))
    }

    // Add part after last dot
    if (i === chunks.length - 1) {
      merged.push(chunks[i].replace('\\.', '.'))
    }
  }

  chunks = merged

  // console.log(JSON.stringify(chunks))

  return chunks
}

export {
  getMappedValue,
  getPathMappedValue,
  setMappedValue,
  getObjectPath
}
