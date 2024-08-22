'use strict'

/*
  Написать функцию, которая принимает min u max
  и возвращает случайное целое число между ними, включая их
*/

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

random(1, 20)
