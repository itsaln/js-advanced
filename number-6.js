'use strict'

const options = {
  style: 'currency',
  currency: 'RUB'
}

const options2 = {
  style: 'currency',
  currency: 'USD'
}

const options3 = {
  style: 'currency',
  currency: 'UZS'
}

const options4 = {
  style: 'currency',
  currency: 'AED'
}

const options5 = {
  style: 'decimal'
}

const options6 = {
  style: 'percent'
}

const options7 = {
  style: 'unit',
  unit: 'celsius'
}

console.log(new Intl.NumberFormat('ru-RU', options).format(23000))
console.log(new Intl.NumberFormat('en-US', options2).format(23000))
console.log(new Intl.NumberFormat('uz-UZ', options3).format(23000))
console.log(new Intl.NumberFormat('ar-SY', options4).format(23000))
console.log(new Intl.NumberFormat('ru-RU', options5).format(10000))
console.log(new Intl.NumberFormat('ru-RU', options6).format(0.1))
console.log(new Intl.NumberFormat('ru-RU', options7).format(25))
