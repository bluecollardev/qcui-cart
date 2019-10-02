import * as StringHelper from './String'

function isEmpty(obj) {
  obj = obj || null

  if (obj === null) return true

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj.prop !== null) return false
  }

  return true
}

function cleanObject(obj) {
  obj = Object.entries(obj)
    .filter(([key, value]) => value !== undefined)
    .reduce((obj, [key, value]) => (obj[key] = value, obj), {})

  return obj
}

function recursiveFormatKeys(data, from, to) {
  let clone = {}
  let modes = [
    'underscore',
    'camelcase',
    'hyphenate'
  ]
  if (!(modes.indexOf(from) > -1 || !modes.indexOf(to) > -1)) {
    throw new Error('Cannot normalize data: incorrect mode and currentMode supplied. Valid modes are \'underscore\', \'camelcase\' and \'hyphenate\'.')
  }

  Object.keys(data).reduce((obj, prop) => {
    let val = data[prop]
    let newVal = (typeof val === 'object' && val !== null) ? recursiveFormatKeys(val, from, to) : val

    switch (to) {
      case 'underscore':
        obj[StringHelper.underscore(prop)] = newVal
        break
      case 'camelcase':
        obj[StringHelper.camelize(prop)] = newVal
        break
      case 'hyphenate':
        obj[StringHelper.hyphenize(prop)] = newVal
        break
    }
    return obj
  }, clone)

  return clone
}

/**
 * TODO: A handler like below preserves properties
 * if (old_key !== new_key) {
 *     Object.defineProperty(o, new_key, Object.getOwnPropertyDescriptor(o, old_key))
 *     delete o[old_key];
 * }
 */
function recursiveRenameKeys(data, mappings) {
  let clone = {}
  /* let modes = ['underscore', 'camelcase', 'hyphenate']
   if (!(modes.indexOf(from) > -1 || !modes.indexOf(to) > -1)) {
   throw new Error("Cannot normalize data: incorrect mode and currentMode supplied. Valid modes are 'underscore', 'camelcase' and 'hyphenate'.")
   } */

  Object.keys(data).reduce((obj, prop) => {
    let val = data[prop]
    let newVal = (typeof val === 'object' && val !== null) ? recursiveFormatKeys(val, mappings) : val

    /* switch (to) {
     case 'underscore':
     obj[StringHelper.underscore(prop)] = newVal
     break
     case 'camelcase':
     obj[StringHelper.camelize(prop)] = newVal
     break
     case 'hyphenate':
     obj[StringHelper.hyphenize(prop)] = newVal
     break
     }
     return obj
     }, clone) */

    return clone
  })
}

function prefixKeys(obj, prefix, dest = {}) {
  return Object.keys(obj).reduce((o, key) => {
    o[`${prefix}${key}`] = obj[key]
    return o
  }, dest || {})
}

/**
 * Quick and dirty way to compare arrays or objects without getting into too much detail.
 * This isn't the fastest solution by any means but it generally works.
 * I don't recommend using this to compare complex structures (it'll be slow).
 */
function jsonSameMembers(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export {
  isEmpty,
  cleanObject,
  recursiveFormatKeys,
  recursiveRenameKeys,
  prefixKeys,
  jsonSameMembers
}
