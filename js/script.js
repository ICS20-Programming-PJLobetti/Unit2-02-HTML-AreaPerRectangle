// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '4 + 10 = ' + (4 + 10)
  document.getElementById('subtract-math').innerHTML = '7 - 5 =  ' + (7 - 5)
  document.getElementById('multiply-math').innerHTML = '3 + 6 * 2 = ' + (3 + 6 * 2)
  document.getElementById('divide-math').innerHTML = '(9 / 3) + 3 = ' + ((9 / 3) + 3)
  document.getElementById('exponent-math').innerHTML = '10 + 2 ** 3 = ' + (10 + 2 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(36) = ' + Math.sqrt(81)
}
function calculateArea () {
  // this function calculates area
  document.getElementById('multiply-math2').innerHTML = 'The area is ' + (5 * 3) + ' cm²'
}

function calculatePerimeter () {
  // this function calculates perimeter
  document.getElementById('add-math2').innerHTML = 'The perimeter is ' + (5 * 2 + 3 * 2) + ' cm'
}
