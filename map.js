'use strict'

const wetherMap = new Map()

wetherMap
  .set('London', '10')
  .set('Moskow', '7')

console.log(wetherMap.get('Moskow'))
console.log(wetherMap.get('not found'))

console.log(wetherMap.has('Moskow'))
console.log(wetherMap.has('not found'))
console.log(wetherMap.delete('London'))

const arr = [1, 2, 3]

wetherMap
  .set(1, 5)
  .set(true, 'Yes')
  .set(false, 'No')
  .set(arr, 'Array')
  .set({ a: 1 }, { b: 1 })

console.log(wetherMap)
console.log(wetherMap.size)

console.log(wetherMap.get(arr))
console.log(wetherMap.get({ a: 1 }))
