// TODO: Include packages needed for this application
var inquirer= require('inquirer')
var require = require('fs')
var secPage = require ()


// TODO: Create an array of questions for user input
const questions = ['What would you like the title to be?','Please provide a description of the project', 'What is the table of contents structure?',"Any steps for installation?",'Provide instruction for usage','Do you need a liscense and if so what kind?','Contributers on project',];
const answers= []
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    for (let i = 0; i < questions.length; i++){
        inquirer.prompt([
            {
            type: 'input',
            message:questions[i],
            name:'title',
            },
            {
            type:'input',
            message:questions[i],
            name: 'description',
            },
            {
            type: 'input',
            message: questions[i],
            name: 'tableofcontents'},
             {
                type: 'input',
                message: questions[i],
                name: 'install'
            },
            {
                type: 'input',
                message: questions[i],
                name: 'contributors',

            },
            {
                type: 'input',
                message: questions[i],
                name: 'tests'
            },
            {
                type: 'input',
                message: questions[i],
                name: 'questions'
            }])
            
        .then( (response) =>{
            console.log(response)
            })

    }
}
writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
