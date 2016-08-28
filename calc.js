var solution = document.getElementById('solution');

function squareNumber(num) {
  num = document.getElementById('square-input').value;
  var numberSquared = num * num;
  var result = 'The result of squaring the number ' + num + ' is ' + numberSquared;
  return solution.innerText = result;
}

function halfOf(num) {
  num = document.getElementById('half-input').value;
  var half = num / 2;
  var result = 'Half of ' + num + ' is ' + half;
  return solution.innerText = result;
}

function percentOf(num1, num2) {
  num1 = document.getElementById('percent1-input').value;
  num2 = document.getElementById('percent2-input').value;
  var percent = (num1 / num2) * 100;
  var result = num1 + ' is ' + percent + '% of ' + num2;
  return solution.innerText = result;
}

function areaOfCircle(radius) {
  radius = document.getElementById('area-input').value;
  var radSquared = radius * radius;
  var area = Math.PI * radSquared;
  var result = 'The area of a circle with the radius ' + radius + ' is ' + area;
  return solution.innerHTML = result;
}

document.getElementById('square-button').addEventListener('click', squareNumber);
document.getElementById('half-button').addEventListener('click', halfOf);
document.getElementById('percent-button').addEventListener('click', percentOf);
document.getElementById('area-button').addEventListener('click', areaOfCircle);
