'use strict';

const num9 = document.getElementById('9');
const num8 = document.getElementById('8');
const num7 = document.getElementById('7');
const num6 = document.getElementById('6');
const num5 = document.getElementById('5');
const num4 = document.getElementById('4');
const num3 = document.getElementById('3');
const num2 = document.getElementById('2');
const num1 = document.getElementById('1');
const num0 = document.getElementById('0');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const mult = document.getElementById('mult');
const divd = document.getElementById('divd');
let prop = document.querySelector('.problem');
let size = prop.value;

num9.addEventListener('click', function () {
  prop.value += '9';
  size = prop.value;
});
num8.addEventListener('click', function () {
  prop.value += '8';
  size = prop.value;
});
num7.addEventListener('click', function () {
  prop.value += '7';
  size = prop.value;
});
num6.addEventListener('click', function () {
  prop.value += '6';
  size = prop.value;
});
num5.addEventListener('click', function () {
  prop.value += '5';
  size = prop.value;
});
num4.addEventListener('click', function () {
  prop.value += '4';
  size = prop.value;
});
num3.addEventListener('click', function () {
  prop.value += '3';
  size = prop.value;
});
num2.addEventListener('click', function () {
  prop.value += '2';
  size = prop.value;
});
num1.addEventListener('click', function () {
  prop.value += '1';
  size = prop.value;
});
num0.addEventListener('click', function () {
  prop.value += '0';
  size = prop.value;
});
plus.addEventListener('click', function () {
  prop.value += '+';
  size = prop.value;
});
minus.addEventListener('click', function () {
  prop.value += '-';
  size = prop.value;
});
mult.addEventListener('click', function () {
  prop.value += '×';
  size = prop.value;
});
divd.addEventListener('click', function () {
  prop.value += '÷';
  size = prop.value;
});

document.getElementById('dot').addEventListener('click', function () {
  prop.value += '.';
  size = prop.value;
});

if (size.length >= 15) {
  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length - 1; i++) {
    if (buttons[i].id !== 'equal') {
      buttons[i].disabled = true;
    }
  }
  size = size.slice(0, 15);
}

document.getElementById('c').addEventListener('click', function () {
  prop.value = '';
});
document.getElementById('equal').addEventListener('click', function () {
  size = prop.value;

  console.log(size);
  let n1 = '',
    n2 = '',
    res = '';
  for (let i = 0; i < size.length; i++) {
    if (
      (size[i] === '÷') |
      (size[i] === '×') |
      (size[i] === '+') |
      (size[i] === '-')
    ) {
      n1 = Number(size.substring(0, i));
      n2 = Number(size.substring(i + 1, size.length));
    }
    if ((size[i] === '+') | (size[i] === '-')) {
      if (size[i] === '+') {
        res = n1 + n2;
      } else if (size[i] === '-') {
        res = n1 - n2;
      }
    } else if ((size[i] === '×') | (size[i] === '÷')) {
      if (size[i] === '×') {
        res = n1 * n2;
      } else if (size[i] === '÷') {
        res = n1 / n2;
      }
    }
  }
  prop.value = res;
});
