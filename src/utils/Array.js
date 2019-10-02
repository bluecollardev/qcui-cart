function recursiveMap(fn, list) {
  return !list.length ? [] : [fn(list[0])].concat(recursiveMap(fn, list.slice(1)))
}

function recursiveReduce(fn, value, list) {
  return !list.length ? value : recursiveReduce(fn, fn(value, list[0], list.slice(1)))
}

function recursiveFilter(predicate, list) {
  return !list.length ? [] : (predicate(list[0]) ? [list[0]] : []).concat(Array.prototype.filter(predicate, list.slice(1)))
}

function intersect(a, b) {
  let ai = 0; let bi = 0; let result = []

  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      ai++
    } else if (a[ai] > b[bi]) {
      bi++
    } else {
      result.push(a[ai])
      ai++
      bi++
    }
  }

  return result
}

function intersectDestructive(a, b) {
  let result = []

  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      a.shift()
    } else if (a[0] > b[0]) {
      b.shift()
    } else {
      result.push(a.shift())
      b.shift()
    }
  }

  return result
}

function containsAll(arr1, arr2) {
  return arr2.every(arr2Item => arr1.includes(arr2Item))
}

function sameMembers(arr1, arr2) {
  return (containsAll(arr1, arr2) && containsAll(arr2, arr1))
}

function jsonSameMembers(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2)
}

export {
  recursiveMap,
  recursiveReduce,
  recursiveFilter,
  intersect,
  intersectDestructive,
  containsAll,
  sameMembers,
  jsonSameMembers
}
