// ***************************
// ORIGINAL VERSION
// ***************************
// const textArea = document.querySelector("#noteInput");
// const saveButton = document.querySelector("#saveNote");
// const container = document.querySelector("#notesContainer");

// const loadNotes = () => {
//   const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
// nullish coelesing operator is needed as you cannot have an empty array 
// as ForEach below will throw an error.
//   notes.forEach(createNoteElement);
// };

// const createNoteElement = (content) => {
//   const noteElement = document.createElement("li");
//   noteElement.textContent = content;
//   container.appendChild(noteElement);
// displays the notes one the Dom
// };

// saveButton.addEventListener("click", () => {
//   const noteContent = textArea.value.trim();
//   createNoteElement(noteContent);
//   textArea.value = "";
//   const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
//   notes.push(noteContent);
//   localStorage.setItem("notes", JSON.stringify(notes));
// removes text from textArea.value = ""; 
// .trim trims whitespace off the note. 
// pushes not to the array then saves it to storage.
// creates and displays notes on page
// 
// });

// loadNotes();

// ***************************
// OOP VERSION
// ***************************

class NoteApp {
  constructor(containerSelector, inputSelector, saveButtonSelector) {
    this.container = document.querySelector(containerSelector);
    this.textArea = document.querySelector(inputSelector);
    this.saveButton = document.querySelector(saveButtonSelector);
    this.notes = JSON.parse(localStorage.getItem("notes")) ?? [];

    this.saveButton.addEventListener("click", () => this.saveNote());
    this.loadNotes();
  }

  loadNotes() {
    this.notes.forEach((note) => this.createNoteElement(note));
  }

  createNoteElement(content) {
    const noteElement = document.createElement("li");
    noteElement.textContent = content;
    this.container.appendChild(noteElement);
  }

  saveNote() {
    const noteContent = this.textArea.value.trim();
    if (noteContent) {
      this.createNoteElement(noteContent);
      this.textArea.value = "";
      this.notes.push(noteContent);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
// this is the same app refactored into an OOP style

new NoteApp("#notesContainer", "#noteInput", "#saveNote");

// local Storage //
 
// local storage lets us store information in the users browser 
// it is usually capped by most browsers to about 5mb worth of data
// there are some rules and restrictions around this. 
//  it is normally stored as key value pairs. It is very useful in 
//  a bunch of different situations. 
// if you type localStorage it opens up things about adds tracking data
// page access, metrics about the user.
// localStorage.setItem('color','magenta)
// takes a key and a value and adds them to the localStorage object. 
// localStorage.getItem('color') allows you to reteive the value of local storage.
// localStorage.removeItem('color')
// this removes the key and value from localStorage object taking the key 
//  as the argument
// localStorage.getItem('color') will return null if the key isnt found.
// localStorage.clear() will remove everything. 
// local storage only stores strings 
// if you try to store a number it stores it as a string. 
// so you need to turn it into a number 
//  the same is true with an array or object. 
// nums [1,2,3,4]
// it stores it as a comma seperated list it also returns it as one. 
//  the easiest way to get round this is to use JSON.stringify.
// localStorage.setItem("nums",JSON.stringify(nums)) set item takes the value here 
// as the JSON stringified value you are trying to set.
// JSON.parse(localStorage.getItem('nums'))
//  const branchSession = JSON.parse(localStorage.getItem('branch_session_first'))
// this is how you can retreive and return value of a key from local storage
// and convert it into an array. 
// otherwise it is stored as a string.

// pros and cons of local storage //

// local storage should not store sensetive data 
// it should only stor things like user preferences and 
// user actions, interactions. 
// shopping cart items partially filled in forms. 
// cached information an analytical data and add tracking are obvious choices. 
// no passwords or user sprecific data email addresses and phone numbers
// anything that can be used to identify someone. 
