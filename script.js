// DOM 6 dalis, 23 skaidre
// var color = ['red', 'blue', 'green', 'yellow']
// var container = document.getElementById('container') // div container container

// var header = document.createElement('h1') // Creating new header
// var headerText = document.createTextNode('Header made with JS') // Making new text node

// header.style.textAlign = 'center' // Applying style to newly created element
// header.appendChild(headerText) // Inserting text into newly created element
// container.prepend(header) // Inserting newly created element into div container

// // Adding event listeners to every button
// document.getElementById('button1').addEventListener('click', changeTextColor)
// document
//   .getElementById('button2')
//   .addEventListener('click', changeBackgroundColor)
// document.getElementById('button3').addEventListener('click', changeFontSize)
// document.getElementById('button4').addEventListener('click', changePElements)

// // Code that will be executed when the button is pressed
// function changeTextColor() {
//   document.getElementById('child1').style.color = 'red'
// }

// function changeBackgroundColor() {
//   document.getElementsByClassName('child2')[0].style.backgroundColor = 'blue'
// }

// function changeFontSize() {
//   document.getElementsByTagName('span')[0].style.fontSize = '2rem'
// }

// function changePElements() {
//   var listOfp = document.getElementsByTagName('p')
//   for (var i = 0; i < listOfp.length; i++) {
//     console.log((listOfp[i].style.color = color[i]))
//   }
// }
// DOM 6 dalis, 23 skaidre pabaiga

var table = document.getElementById('table')
document.getElementById('button').addEventListener('click', generateTable)

function generateTable() {
  var rows = document.getElementsByName('rows')
  var columns = document.getElementsByName('columns')

  for (var i = 0; i < rows[0].value; i++) {
    var tr = document.createElement('tr')
    table.appendChild(tr)
    var currentTr = document.getElementsByTagName('tr')[i]
    for (var j = 0; j < columns[0].value; j++) {
      var td = document.createElement('td')
      var tdText = document.createTextNode(`${i} . ${j}`)
      td.appendChild(tdText)
      currentTr.appendChild(td)
    }
  }
}
