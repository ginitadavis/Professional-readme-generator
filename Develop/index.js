// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project','Provide a description of your project', 'Provide a detailed installation process', 'Explain the usage of the application',
'What is your github username?', 'Test instructions'];
const license = ['Apache License v2.0','GNU General Public License v3.0','MIT License'];

const apache = `[![Apache License v2.0](https://img.shields.io/badge/-Apache%20License%20v2.0-orange)](http://www.apache.org/licenses/LICENSE-2.0)`
const GNU = `[![GNU General Public License v3.0](https://img.shields.io/badge/-GNU%20General%20Public%20License%20v3.0-blue)](https://www.gnu.org/licenses/)`
const MIT = `[![MIT License](https://img.shields.io/badge/-MIT%20License-brightgreen)](https://www.mit.edu/~amini/LICENSE.md)`

const fs = require('fs');
let response = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use the fs write file function 
    // pass the filename and the data to the function

    let selectedLicense = '';
    for (let i = 0; i < data.license.length; i++){
        
        let firstWord;
        firstWord = data.license[i].split(' ')[0];

        if (firstWord === 'Apache'){
            selectedLicense = selectedLicense + apache;    
        }
        if (firstWord === 'MIT'){
            selectedLicense = selectedLicense + MIT;
        }
        if (firstWord === 'GNU'){
            selectedLicense = selectedLicense + GNU;
        }
    }

    const completedReadme = `
# ${data.proTitle}

## Description

${data.proDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation
${data.proInstallation}

## Usage

${data.proUsage}

![alt text](assets/images/inquirer-screenshot.png)

## Contributing
- [![Node.js](https://img.shields.io/badge/-node.js-blueviolet)](https://img.shields.io/badge/-node.js-blueviolet)
- [![Node.js](https://img.shields.io/badge/-node.js-blueviolet)](https://img.shields.io/badge/-node.js-blueviolet)


## Tests
${data.testInstructions}

## Questions
Link to my github profile [@ginitadavis](https://github.com/${data.github}/)

## License
${selectedLicense}

    `
    
    
    fs.writeFile(fileName, completedReadme, function(){
        console.log('README successfully created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'proTitle'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'proDescription'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'proInstallation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'proUsage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testInstructions'
        },
        {
            type: 'checkbox',//process.argv[7]
            message: 'Please select a license',
            name: 'license',
            choices: license,
        }
    ])
    .then ((data) => {
        const fileName = '../README.md';
        writeToFile(fileName, data);
    })
}

// Function call to initialize app
init();

