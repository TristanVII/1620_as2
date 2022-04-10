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
const icons = document.querySelector('.icons')
const sideNav = document.querySelector('.notes-list')
const readArea = document.querySelector('.read-note-area')

function addNote(evt) {
  addBtn.style.display = 'none'                    
  createNoteArea(evt)
}

addBtn.addEventListener('click', addNote)

function createNoteArea(evt) {
  const textarea = document.createElement('textarea')
  const saveBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')
  const noteTakingArea = document.createElement('div')
  saveBtn.className = 'save-button'
  saveBtn.innerHTML = 'Save'
  cancelBtn.className = 'cancel-button'
  cancelBtn.innerHTML = 'Cancel'
  noteTakingArea.className = 'note-taking-area'
  writeArea.appendChild(noteTakingArea)
  noteTakingArea.appendChild(textarea)
  noteTakingArea.appendChild(saveBtn)
  noteTakingArea.appendChild(cancelBtn)
  cancelBtn.addEventListener('click', removeNote)
  saveBtn.addEventListener('click', saveNoteArray)
}

//cancel button remove note

function removeNote(evt) {
  addBtn.style.display = 'block'
    while (writeArea.firstChild) {
      writeArea.removeChild(writeArea.firstChild);
    }
}

//save button 


function saveNoteArray(evt) {
  addBtn.style.display = 'block'
  const textarea = document.querySelector('textarea')
  const arrayLines = textarea.value.split('\n')
  const noteTitle = arrayLines.shift()
  const noteBody = arrayLines.join("\r\n")
  console.log(notes)
  notes.push({title: noteTitle, noteBody: noteBody, id: notes.length + 1}) 
  saveSidenav(noteTitle, arrayLines)
  removeNote(evt)
}

function saveSidenav(noteTitle, noteBody) {
  const liTitle = document.createElement('li')
  sideNav.appendChild(liTitle)
  liTitle.insertAdjacentHTML('afterbegin', noteTitle)
  liTitle.addEventListener('click', () => {
    createReadNoteArea(noteTitle, noteBody)
  })
}

function createReadNoteArea(noteTitle, noteBody) {
  const noteDiv = document.createElement('div')
  const noteParagraph = document.createElement('p')
  const closeBtn = document.createElement('button')
  const noteHeader = document.createElement('h1')
  noteDiv.className = 'note-div'
  noteParagraph.className = 'note-paragraph'
  noteHeader.className = 'note-header'
  noteParagraph.innerHTML = noteBody
  noteHeader.innerHTML = noteTitle
  closeBtn.innerHTML = 'Close'
  readArea.appendChild(noteDiv)
  noteDiv.appendChild(noteHeader)
  noteDiv.appendChild(noteParagraph)
  noteDiv.appendChild(closeBtn)
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.remove()  
  })
}