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
const markdown = require("./utils/generateMarkdown");


//inquirer prompt to prompt quesitons in terminal.

inquirer
  .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a brief description of your application.',
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
            name: 'dependencies',
            message: 'What prerequsites does your application require before installing the application?',

        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your application?',

        },
        {
            type: 'input',
            name: 'guide',
            message: 'How do you run your program?',

        },
        {
            type: 'list',
            name: 'license',
            message: "Which Licenses do you have?",
            choices: ["MIT", "Apache", "Mozilla", "Eclipse", "GPL", "IBM"],
            default: 'none'

        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Did anyone else contribute to your application?',

        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests have you run with this applicaton?',

        },
        {
            type: 'input',
            name: 'faq',
            message: 'What are some frequently asked questions and answers for your application?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]).then ((data) => {

      //then setting up the write to file to send mark up from generateMarkdown.js to readme file as formatted.  

        const responses = markdown(data)

        fs.writeFile('README.md', responses, (err) =>
        err ? console.error(err) : console.log('Generating Readme file!')
      );

    });





