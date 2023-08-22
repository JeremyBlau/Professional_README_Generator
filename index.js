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
function init() {}

// Function call to initialize app
init();
