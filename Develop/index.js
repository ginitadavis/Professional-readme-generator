// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project','Provide a description of your project', 'Provide a detailed installation process', 'Explain the usage of the application',
'What is your github username?', 'What is your email address?','Please enter contributing guidelines', 'Test instructions'];
const license = ['Apache License v2.0','GNU General Public License v3.0','MIT License'];

const apache = `[![Apache License v2.0](https://img.shields.io/badge/-Apache%20License%20v2.0-orange)](http://www.apache.org/licenses/LICENSE-2.0)`
const GNU = `[![GNU General Public License v3.0](https://img.shields.io/badge/-GNU%20General%20Public%20License%20v3.0-blue)](https://www.gnu.org/licenses/)`
const MIT = `[![MIT License](https://img.shields.io/badge/-MIT%20License-brightgreen)](https://www.mit.edu/~amini/LICENSE.md)`

const noticeApache = `Apache License

The Apache License Version 2.0 is a license that governs the use, reproduction, and distribution of software. The license grants the user a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute the work and such derivative works in source or object form. Additionally, each contributor grants to the user a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in the license) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the work, where such license applies only to those patent claims licensable by such contributor that are necessarily infringed by their contribution(s) alone or by combination of their contribution(s) with the work to which such contribution(s) was submitted.
Users may reproduce and distribute copies of the work or derivative works thereof in any medium, with or without modifications, and in source or object form, provided that the following conditions are met: (1) any other recipients of the work or derivative works are given a copy of the license, (2) any modified files carry prominent notices stating that they were changed, (3) all copyright, patent, trademark, and attribution notices are retained in the source form of any derivative works that are distributed, excluding those notices that do not pertain to any part of the derivative works, and (4) if the work includes a "NOTICE" text file as part of its distribution, any derivative works that are distributed must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the derivative works, in at least one of the following places: within a NOTICE text file distributed as part of the derivative works, within the source form or documentation if provided along with the derivative works, or within a display generated by the derivative works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the license. Users may add their own attribution notices within derivative works that they distribute, alongside or as an addendum to the NOTICE text from the work, provided that the additional attribution notices are clearly marked as such and do not imply a direct or indirect endorsement by the licensor of the derivative works.`;
const noticeGNU = `GNU License

This is the GNU Lesser General Public License, version 3, which was released by the Free Software Foundation in 2007. The license allows users to copy and distribute the licensed software, but modifications to the software must also be released under the same license. The license also includes specific provisions for libraries and their use in applications or combined works, as well as exceptions to certain provisions in the GNU General Public License. `;
const noticeMIT = `MIT License

Copyright (c) 2013 Mark Otto.
Copyright (c) 2017 Andrew Fong.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

const fs = require('fs');
let response = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use the fs write file function 
    // pass the filename and the data to the function

    let selectedLicense = '';
    let selectedNotice = ``;
    for (let i = 0; i < data.license.length; i++){
        
        let firstWord;
        firstWord = data.license[i].split(' ')[0];

        if (firstWord === 'Apache'){
            selectedLicense = selectedLicense + apache;    
            selectedNotice = `${selectedNotice}

            ${noticeApache}`;
        }
        if (firstWord === 'MIT'){
            selectedLicense = selectedLicense + MIT;
            selectedNotice = `${selectedNotice}
            
            ${noticeMIT}`;
        }
        if (firstWord === 'GNU'){
            selectedLicense = selectedLicense + GNU;
            selectedNotice = `${selectedNotice}
            
            ${noticeGNU}`;
        }
    }

    const completedReadme = `
# ${data.proTitle}
${selectedLicense}

# Description

${data.proDescription}



# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)



# Installation
${data.proInstallation}

![alt text](assets/images/inquirer-screenshot.png)



# Usage

${data.proUsage}

![alt text](assets/images/terminal-readme.png)

Link to the walkthrough video that demonstrates the functionality of the README generator [Click here to watch the video](https://drive.google.com/file/d/1zGuKZzuoalbatS5zntjUP5z35saLKSWd/view)



# Credits
- [![Node.js](https://img.shields.io/badge/-node.js-blueviolet)](https://nodejs.org/en/)
- [![inquirer](https://img.shields.io/badge/-inquirer-ff69b4)](https://www.npmjs.com/package/inquirer)



# Contributing
${data.contributing}



# Tests
${data.testInstructions}



# Questions
Link to my github profile [Github](https://github.com/${data.github}/)
If you have any questions, you can reach me via email at ${data.email}



# License
${selectedNotice}



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
            name: 'email'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[7],
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

