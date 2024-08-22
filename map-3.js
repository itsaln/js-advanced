'use strict'

const wetherMap = new Map([
  ['London', 10],
  ['Moskow', 7],
  ['Paris', 14]
])

for (const [key, value] of wetherMap) {
  console.log(key)
  console.log(value)
}

// wetherMap.forEach((value, key) => {
//   console.log(value)
//   console.log(key)
// })

console.log([...wetherMap])
console.log([...wetherMap.keys()])
console.log([...wetherMap.values()])
