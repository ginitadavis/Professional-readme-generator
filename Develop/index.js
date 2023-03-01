// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = ['What was your motivation?', 'Why did you build this project?',
'What problem does it solve?', 'What did you learn?'];
let response = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use the fs wrte file function 
    // pass the filename and the data to the function
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: response[0]
        },
        {
            type: 'input',
            message: questions[1],
            name: response[1]
        },
        {
            type: 'input',
            message: questions[2],
            name: response[2]
        },
        {
            type: 'input',
            message: questions[3],
            name: response[3]
        },
    ])
    .then ((data) => {
        const fileName = 'README.md';
        
    })