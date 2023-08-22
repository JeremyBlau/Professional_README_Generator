// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require('fs');

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
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
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
  For any questions, please contact me at ${answers.email}. You can also visit my GitHub profile at [https://github.com/${answers.username}](https://github.com/${answers.username}).
  `;
  
      writeToFile('README.md', readmeContent);
    } catch (error) {
      console.error(error);
    }
  }

// Function call to initialize app
init();
