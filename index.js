// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should users install your application?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should users use your application?'
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license does your project use?'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to your project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for your project?'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README generated as ${fileName}`);
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);

        const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Screenshot
Paste a photo of your application here.

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at ${answers.email}. 
`;

        writeToFile('README.md', readmeContent);
    } catch (error) {
        console.error(error);
    }
}

// Function call to initialize app
init();
