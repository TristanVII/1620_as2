const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//create note taking area

const addBtn = document.querySelector('i')
const writeArea = document.querySelector('.write-note-area')
let txtarea = "<textarea id='note-textarea'></textarea> <button id='save-button'>Save</button> <button id='cancel-button'>Cancel</button>"

function addNote(evt) {
  writeArea.insertAdjacentHTML('afterbegin', txtarea)
  const cancelBtn = document.querySelector('#cancel-button')
  cancelBtn.addEventListener('click', removeNote)
  const saveBtn = document.querySelector('#save-button')
  saveBtn.addEventListener('click', saveNote)
}

addBtn.addEventListener('click', addNote)

//cancel button remove note

function removeNote(evt) {
    while (writeArea.firstChild) {
      writeArea.removeChild(writeArea.firstChild);
    }
}

//save button 

function saveNote(evt) {
  const textarea = document.querySelector('textarea')
  notes.push({title: "first note", noteBody: textarea.value, id: notes.length + 1})
  console.log(notes)
}


