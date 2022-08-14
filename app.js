// https://www.omnicalculator.com/math/modulo

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const remainderRadio = document.getElementById('remainderRadio');
const dividendRadio = document.getElementById('dividendRadio');
const divisorRadio = document.getElementById('divisorRadio');

let remainder;
let dividend = v1;
let divisor = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

remainderRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend';
  variable2.textContent = 'Divisor';
  dividend = v1;
  divisor = v2;
  result.textContent = '';
});

dividendRadio.addEventListener('click', function() {
  variable1.textContent = 'Remainder';
  variable2.textContent = 'Divisor';
  remainder = v1;
  divisor = v2;
  result.textContent = '';
});

divisorRadio.addEventListener('click', function() {
  variable1.textContent = 'Remainder';
  variable2.textContent = 'Dividend';
  remainder = v1;
  dividend = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(remainderRadio.checked)
    result.textContent = `Remainder = ${computeRemainder().toFixed(2)}`;

  else if(dividendRadio.checked)
    result.textContent = `Dividend = ${computeDividend().toFixed(2)}`;

  else if(divisorRadio.checked)
    result.textContent = `Divisor = ${computeDivisor().toFixed(2)}`;
})

// calculation

function computeRemainder() {
  return Number(dividend.value) % Number(divisor.value);
}

function computeDividend() {
  return Number(remainder.value) * Number(divisor.value);
}

function computeDivisor() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}