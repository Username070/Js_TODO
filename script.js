var tbody = document.getElementsByTagName('tbody')[0] // Where subject data will go
var idCount = 0 // To keep track of subjects

document.getElementById('buttonNew').addEventListener('click', function () { // Listening if new subject button was pressed
  var subjectInfo = [ // Getting typed data from inputs
    document.getElementById('subject'),
    document.getElementById('priority'),
    document.getElementById('date'),
    document.getElementById('status'),
  ]

  for (var i = 0; i < 4; i++) { // Looking if the given values are not empty
    if (subjectInfo[i].value.length == 0) {
      throw new Error('Validation failed')
    }
  }

  var tr = document.createElement('tr') // Making new tr element
  tr.setAttribute('id', `tr${idCount}`) // Setting up attribute with unique id
  tbody.appendChild(tr) // Inserting newly created tr element into table body

  var idText = document.createTextNode(idCount) // Creating node with id number
  var id = document.createElement('td') // Creating td element
  id.appendChild(idText) // Putting id number in td element
  tr.appendChild(id) // Inserting unique id into table

  var td
  for (var i = 0; i < 4; i++) { // Inserting subject data that was provided by user into table
    var tdText = document.createTextNode(subjectInfo[i].value)
    td = document.createElement('td')
    td.appendChild(tdText)
    tr.appendChild(td)
  }

  const deleteIcon = document.createElement('td') // Making new td element
  tr.appendChild(deleteIcon) // Putting that new td element into a table
  deleteIcon.innerHTML = ` 
  <button id="delete${idCount}" name="${idCount}"><i class='fa-solid fa-x'></i></button>
  <button id="edit${idCount}" name="${idCount}" data-toggle="modal" data-target="#editModal"><i class="fa-solid fa-pen-to-square"></i></button>
  ` // Making delete and edit buttons with unique id's

  document.getElementById(`delete${idCount}`).addEventListener('click', function () { // Removing requested subject from table
    document.getElementById(`tr${this.name}`).remove()
  })

  document.getElementById(`edit${idCount}`).addEventListener('click', function () { // Editing requested subject from table
    var parent = document.getElementById(`tr${this.name}`); // Getting tr of requested element
    var allChildren = parent.getElementsByTagName('td') // Getting every td child of requested tr element

    // Inserting selected data from table into form that's gonna update it with new data
    document.getElementById('subjectEdit').value = allChildren[1].innerHTML
    document.getElementById('priorityEdit').value = allChildren[2].innerHTML
    document.getElementById('dateEdit').value = allChildren[3].innerHTML
    document.getElementById('statusEdit').value = allChildren[4].innerHTML

    document.getElementById('buttonEdit').addEventListener('click', (evt) => submitNewEdit(allChildren)) // When submit edit button is pressed
  })
  idCount++ // Increment id to keep it unique
})

function submitNewEdit(allChildren) {
  var newSubjectInfo = [ // Take edited subject info
    document.getElementById('subjectEdit'),
    document.getElementById('priorityEdit'),
    document.getElementById('dateEdit'),
    document.getElementById('statusEdit'),
  ]

  // Edit old subject info with edited subject info
  allChildren[1].innerHTML = newSubjectInfo[0].value
  allChildren[2].innerHTML = newSubjectInfo[1].value
  allChildren[3].innerHTML = newSubjectInfo[2].value
  allChildren[4].innerHTML = newSubjectInfo[3].value
}