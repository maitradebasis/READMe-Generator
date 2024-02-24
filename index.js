const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate README content
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Description](#description)
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
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, you can reach me via my [GitHub profile](https://github.com/${answers.github}) or email at ${answers.email}.
`;
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: ':',
  },
  {
    type: 'input',
    name: 'description',
    message: '',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch(error => {
      console.error('Error occurred while prompting questions:', error);
    });
}

// function call to initialize program
init();




