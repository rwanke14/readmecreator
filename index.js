// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the name of your application?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a brief description of your application.',
        },
        {
            type: 'checkbox',
            name: 'Table of Contents',
            message: "What do you need in your table of contents?",
            choices: ["Title", "Description", "Table of Contents", "Link", "Version", "Installation", "Usage", "License", "Contributors", "Tests", "Questions"],

        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your application?',

        },
        {
            type: 'input',
            name: 'version',
            message: 'What is the current version of your application?',

        },
        {
            type: 'input',
            name: 'Dependencies',
            message: 'What prerequsites does your application require before installing the application?',

        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your application?',

        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How do you use your application?',

        },
        {
            type: 'list',
            name: 'Licenses',
            message: "Which Licenses do you use?",
            choices: ["MIT license", "Apache License 2.0", "Mozilla Public License", "Apple Public Source License"]

        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Did anyone else contribute to your application?',

        },

        {
            type: 'input',
            name: 'Guide',
            message: 'How do you run your program?',

        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What test have you run with this applicaton?',

        },
        {
            type: 'input',
            name: 'FAQ',
            message: 'What are some frequently asked questions and answers for your application?',
        },
    ])

    .then((data) => {
        const readme = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(readme, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
    })

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(README, data) { 

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();