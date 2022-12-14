// packages needed for this application
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
{   
    type: "input",
    name: "github",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "title",
    message: "What is the project name?"
},
{
    type: "input",
    name: "description",
    message: "Write a short description of the project."
},
{
    type: "list",
    name: "license",
    message: "What type of license should your project have?",
    choices: ["MIT", "APACHE", "GPL", "None"]
},
{
    type: "input",
    name: "installation",
    message: "Which command should be ran to isntall dependencies?"
},
{
    type: "input",
    name: "test",
    message: "What command should be ran to run a test?"
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about the repo? "
},
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd()), data)
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
        console.log("Generating README")
        fs.writeFile("README.md", generateMarkdown({...inquirerResponse}), error => {
            if (error) {
                console.log('error')
            }
        })
    })
}

// Function call to initialize app
init(); 
