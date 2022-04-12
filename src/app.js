const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//global variables defined

const addBtn = document.querySelector('i')
const writeArea = document.querySelector('.write-note-area')
const icons = document.querySelector('.icons')
const sideNav = document.querySelector('.notes-list')
const readArea = document.querySelector('.read-note-area')

//create note taking area

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
  textarea.placeholder = 'Note title\nYour note here...'
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
  removeReadNote()
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
  const noteBody = textarea.value.split('\n')
  const noteTitle = noteBody.shift()
  notes.push({title: noteTitle, noteBody: noteBody.join('\n'), id: notes.length + 1}) 
  console.log(notes)
  saveSidenav(noteTitle, noteBody)
  removeNote(evt)
}

//appends an li to the sidenav ul, with the title of the note

function saveSidenav(noteTitle, noteBody) {
  const liTitle = document.createElement('li')
  sideNav.appendChild(liTitle)
  liTitle.insertAdjacentHTML('afterbegin', noteTitle)
  //creates event for each li appended, the event removes the current note displayed(if there is one) and removes the note-taking-area if it is open 
  liTitle.addEventListener('click', () => {
    removeReadNote()
    removeNote()
    createReadNoteArea(noteTitle, noteBody)
  })
}

//removes the note being displayed --> note-div from read-note-area
function removeReadNote() {
  while (readArea.firstChild) {
    readArea.removeChild(readArea.firstChild);
  }
}

//creates elements(div,h1,p) to insert into the readarea, including the Note title and Note body with a close button that calls remove()

function createReadNoteArea(noteTitle, noteBody) {
  const noteDiv = document.createElement('div')
  const noteParagraph = document.createElement('p')
  const closeBtn = document.createElement('button')
  const noteHeader = document.createElement('h1')
  noteDiv.className = 'note-div'
  noteParagraph.className = 'note-paragraph'
  noteHeader.className = 'note-header'
  closeBtn.className = 'close-button'
  noteParagraph.innerHTML = noteBody.join('\n')
  noteHeader.innerHTML = noteTitle
  closeBtn.innerHTML = 'X'
  readArea.appendChild(noteDiv)
  noteDiv.appendChild(closeBtn)
  noteDiv.appendChild(noteHeader)
  noteDiv.appendChild(noteParagraph)
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.remove()  
  })
}

//dark theme

const themeToggle = document.querySelector('.theme-toggle')
themeToggle.addEventListener('click', setDarkTheme)

function setDarkTheme(evt) {
  const DarkTheme = document.querySelector(".light-theme")
  DarkTheme.classList.toggle("dark-theme")
}

