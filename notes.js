const fs = require('fs');
const chalk = require('chalk');

const addNote = ({ title, body }) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title is taken!');
    }
};

const saveNotes = notes => { 
    const noteJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteJSON);
};

const removeNote = noteTitle => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === noteTitle);

    if (duplicateNote) {
        const newNotes = notes.filter((note) => note.title !== noteTitle);
        console.log(`Note with title ${chalk.red(`${noteTitle}`)} has been removed.`);
        saveNotes(newNotes);
    } else {
        console.log('Note does not exist!');
    }

};

const printNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes:'));
    notes.forEach(note => {
        console.log(`${chalk.bgRed(note.title)}`)
    });
};

const readNote = title => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.bgBlue(`${noteToRead.title}`));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red('Note did not exist'));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = { addNote, removeNote, printNotes, readNote };