const chalk = require('chalk');
const yargs  = require('yargs');
const notes = require('./notes');

const commandsList = [
    {
        command: 'add',
        describe: 'Add a note',
        handler: argv => {
            notes.addNote(argv);
        },
        builder: {
            title: {
                describe: 'Note title',
                demandOptions: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOptions: true,
                type: 'string'
            }
        }
    },
    {
        command: 'remove',
        describe: 'Remove a note',
        handler: argv => {
            notes.removeNote(argv.title);
        },
        builder: {
            title: {
                describe: 'Note title',
                demandOptions: true,
                type: 'string'
            },
        }
    },
    {
        command: 'list',
        describe: 'List your notes',
        handler: () => {
            notes.printNotes();
        }
    },
    {
        command: 'read',
        describe: 'Read a note',
        handler: argv => {
            notes.readNote(argv.title);
        },
        builder: {
            title: {
                describe: 'Read a note',
                demandOptions: true,
                type: 'string'
            },
        }
    },
];

const registerCommandsList = commandsList => {
    commandsList.forEach(command => {
        yargs.command({ ...command })
    });
};

registerCommandsList(commandsList);

yargs.parse();