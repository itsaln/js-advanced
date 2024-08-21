'use strict'

/* Необходимо поменять местами ключи и значения в следующем Мар */

let wetherMap = new Map([
  ['London', 10],
  ['Moskow', 7],
  ['Paris', 14]
])

wetherMap = new Map([...wetherMap].map(item => item.reverse()))

console.log(wetherMap)
