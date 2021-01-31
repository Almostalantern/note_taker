const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
    read() {
        return readFile("db/db.json", "utf-8")
    }
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }
    getNotes() {
        return this.read().then(rawNotes => {
            let readNotes = [];
            try {
                readNotes = readNotes.concat(JSON.parse(rawNotes))
            } catch (error) {
                readNotes = [];
            }
            return readNotes;
        })
    }

    writeNote(note) {
        const newNote = {
            title: note.title, text: note.text, id: uuidv4()
        }
        return this.getNotes().then(readNotes => [...readNotes, newNote]).then(updatedNotes => this.write(updatedNotes)).then(()=>newNote)
    }
    deleteNote(id){
        return this.getNotes().then(notesArray => notesArray.filter(note => note.id !== id)).then(deletedNotes => this.write(deletedNotes))
    }

}

module.exports = new Notes();

