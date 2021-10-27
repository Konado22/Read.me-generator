// TODO: Include packages needed for this application
var inquirer= require('inquirer')
var fs = require('fs')
var secPage = require ("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
function writeToFile() {
        inquirer.prompt([
            {
            type: 'input',
            message:'What would you like the title to be?',
            name:'title',
            },
            {
            type:'input',
            message:'Please provide a description of the project',
            name: 'description',
            },
            {
            type: 'input',
            message: 'What is the table of contents structure?',
            name: 'tableofcontents'},
             {
                type: 'input',
                message: "Any steps for installation?",
                name: 'install'
            },
            {
                type: 'input',
                message: 'Provide instruction for usage',
                name: 'contributors',

            },
            {
                type: 'list',
                message:"Select your license badge choice",
                choices: ["MIT", "None", "Fancy"],
                name: 'license'
            },
            {
                type: 'input',
                message: 'Contributers on project',
                name: 'questions'
            }])
            
        .then( (response) =>{
            fs.writeFile('Readme.md', secPage(response), err => {
                console.log(err)
            }) })

    }
writeToFile();
