'use strict';
let size = document.querySelector('.problem').value;

document.getElementById('7').addEventListener('click', function () {
  document.querySelector('.problem').value += '7';
  size = document.querySelector('.problem').value;
});
document.getElementById('8').addEventListener('click', function () {
  document.querySelector('.problem').value += '8';
  size = document.querySelector('.problem').value;
});
document.getElementById('9').addEventListener('click', function () {
  document.querySelector('.problem').value += '9';
  size = document.querySelector('.problem').value;
});
document.getElementById('6').addEventListener('click', function () {
  document.querySelector('.problem').value += '6';
  size = document.querySelector('.problem').value;
});
document.getElementById('5').addEventListener('click', function () {
  document.querySelector('.problem').value += '5';
  size = document.querySelector('.problem').value;
});
document.getElementById('4').addEventListener('click', function () {
  document.querySelector('.problem').value += '4';
  size = document.querySelector('.problem').value;
});
document.getElementById('3').addEventListener('click', function () {
  document.querySelector('.problem').value += '3';
  size = document.querySelector('.problem').value;
});
document.getElementById('2').addEventListener('click', function () {
  document.querySelector('.problem').value += '2';
  size = document.querySelector('.problem').value;
});
document.getElementById('1').addEventListener('click', function () {
  document.querySelector('.problem').value += '1';
  size = document.querySelector('.problem').value;
});
document.getElementById('0').addEventListener('click', function () {
  document.querySelector('.problem').value += '0';
  size = document.querySelector('.problem').value;
});
document.getElementById('plus').addEventListener('click', function () {
  document.querySelector('.problem').value += '+';
  size = document.querySelector('.problem').value;
});
document.getElementById('minus').addEventListener('click', function () {
  document.querySelector('.problem').value += '-';
  size = document.querySelector('.problem').value;
});
document.getElementById('mult').addEventListener('click', function () {
  document.querySelector('.problem').value += '×';
  size = document.querySelector('.problem').value;
});
document.getElementById('divd').addEventListener('click', function () {
  document.querySelector('.problem').value += '÷';
  size = document.querySelector('.problem').value;
});

document.getElementById('dot').addEventListener('click', function () {
  document.querySelector('.problem').value += '.';
  size = document.querySelector('.problem').value;
});
document.getElementById('c').addEventListener('click', function () {
  document.querySelector('.problem').value = '';
  document.querySelector('.result').textContent = 0;
});
document.getElementById('equal').addEventListener('click', function () {
  console.log(document.querySelector('.problem').value);
  size = document.querySelector('.problem').value;

  console.log('fe' + size.length);
  let n1 = '',
    n2 = '';
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
        document.querySelector('.result').textContent = n1 + n2;
      } else if (size[i] === '-') {
        document.querySelector('.result').textContent = n1 - n2;
      }
    } else if ((size[i] === '×') | (size[i] === '÷')) {
      if (size[i] === '×') {
        document.querySelector('.result').textContent = n1 * n2;
      } else if (size[i] === '÷') {
        document.querySelector('.result').textContent = n1 / n2;
      }
    }
  }
});
