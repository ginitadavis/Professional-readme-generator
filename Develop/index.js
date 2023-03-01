// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project','Provide a description of your project', 'Provide a detailed installation process', 'Explain the usage of the application',
'What is your github username?', 'Test instructions'];
const license = ['Apache License v2.0','GNU General Public License v3.0','MIT License'];
// const apache = `Copyright [yyyy] [name of copyright owner]

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.`

// const GNU = `GNU General Public License v3.0
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// See <https://www.gnu.org/licenses/>.`

// const MIT = `[MIT](https://choosealicense.com/licenses/mit/)`
const fs = require('fs');
let response = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use the fs write file function 
    // pass the filename and the data to the function

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
- [@ginitadavis](${data.github})

## Tests
${data.testInstructions}

## Questions
Link to my github profile ${data.github}

## License
${data.license}

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
            type: 'checkbox',
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

