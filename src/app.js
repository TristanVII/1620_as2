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
const txtarea = "<textarea id='note-textarea'></textarea> <button class='save-button'>Save</button> <button class='cancel-button'>Cancel</button>"
const icons = document.querySelector('.icons')

function addNote(evt) {
  addBtn.style.display = 'none'                    //hides add button when clicked
  writeArea.insertAdjacentHTML('afterbegin', txtarea)
  const cancelBtn = document.querySelector('.cancel-button')
  cancelBtn.addEventListener('click', removeNote)
  const saveBtn = document.querySelector('.save-button')
  saveBtn.addEventListener('click', saveNote)
}

addBtn.addEventListener('click', addNote)


//cancel button remove note

function removeNote(evt) {
  addBtn.style.display = 'block'
    while (writeArea.firstChild) {
      writeArea.removeChild(writeArea.firstChild);
    }
}

//save button 

function saveNote(evt) {
  addBtn.style.display = 'block'                     //unhide the add button
  const textarea = document.querySelector('textarea')
  const arrayLines = textarea.value.split('\n')     //returns an array for each line in the text area
  const noteTitle = arrayLines.shift()              //noteTitle removes first word from arrayLine and returns it
  console.log(arrayLines)
  notes.push({title: noteTitle, noteBody: arrayLines.join('\n'), id: notes.length + 1})
  console.log(notes)
  const liTitle = document.createElement('li') 
  sideNav.appendChild(liTitle)
  liTitle.insertAdjacentHTML('afterbegin', noteTitle)
  liTitle.addEventListener('click', () => {
    const readArea = document.querySelector('.read-note-area')
    const noteDiv = document.createElement('div')
    const noteParagraph = document.createElement('p')
    const closeBtn = document.createElement('button')
    noteDiv.className = 'note-div'
    noteParagraph.className = 'note-paragraph'
    noteParagraph.innerHTML = arrayLines
    closeBtn.innerHTML = 'Close'
    readArea.appendChild(noteDiv)
    noteDiv.appendChild(noteParagraph)
    noteDiv.appendChild(closeBtn)
    closeBtn.addEventListener('click', () => {
      closeBtn.parentElement.remove()  
    })
    
  })
  removeNote(evt)                                   //After saving, removeNote function is called closing the note area
}

//display note in sidenav code inside the saveNote function

const sideNav = document.querySelector('.notes-list')

//display notes in sidenav

const readArea = document.querySelector('.read-note-area')


function readNote(evt) {
  console.log(evt)
}
