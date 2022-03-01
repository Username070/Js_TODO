var color = ['red', 'blue', 'green', 'yellow']
var container = document.getElementById('container') // div container container

var header = document.createElement('h1') // Creating new header
var headerText = document.createTextNode('Header made with JS') // Making new text node

header.style.textAlign = 'center' // Applying style to newly created element
header.appendChild(headerText) // Inserting text into newly created element
container.prepend(header) // Inserting newly created element into div container

// Adding event listeners to every button
document.getElementById('button1').addEventListener('click', changeTextColor)
document
  .getElementById('button2')
  .addEventListener('click', changeBackgroundColor)
document.getElementById('button3').addEventListener('click', changeFontSize)
document.getElementById('button4').addEventListener('click', changePElements)

// Code that will be executed when the button is pressed
function changeTextColor() {
  document.getElementById('child1').style.color = 'red'
}

function changeBackgroundColor() {
  document.getElementsByClassName('child2')[0].style.backgroundColor = 'blue'
}

function changeFontSize() {
  document.getElementsByTagName('span')[0].style.fontSize = '2rem'
}

function changePElements() {
  var listOfp = document.getElementsByTagName('p')
  for (var i = 0; i < listOfp.length; i++) {
    console.log((listOfp[i].style.color = color[i]))
  }
}
