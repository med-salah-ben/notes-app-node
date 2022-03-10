const fs = require("fs");
const { title } = require("process");


const fetchNotes =()=>{
    try {
        return JSON.parse(fs.readFileSync("notes.txt"))
    } catch (err) {
        return []
    }
}


//Add Note
const addingNote = (title,body)=>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    notes.push(note)
    fs.writeFileSync('notes.txt',JSON.stringify(notes))
    logNote(note)
};


//Remove or delete Note

const removeNote = (title)=>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note)=>note.title !== title)
    fs.writeFileSync("notes.txt",JSON.stringify(filterNotes))
}


//reading Note 
var readNote = (title) =>{
    var notes = fetchNotes();
    var filterNotes =notes.filter((note)=>note.title === title)
    console.log("reading Note",filterNotes)
}

//read all notes
const getAll = () =>{
    const notes = fetchNotes();
    notes.forEach((note)=>logNote(note))
}

logNote = (note)=>{
    console.log("****************");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`)
}

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}