const managerQuestions = require("./utils/managerQuestions");
const engineerQuestions = require("./utils/engineerQuestions");
const employeeQuestions = require("./utils/employeeQuestions");
const internQuestions = require("./utils/internQuestions");

const inquirer = require("inquirer");
const fs = require("fs");

const newClassInstance = require("./utils/newClassInstance");
let textToAppend = ""

// Question user will be prompted with to see if they want to continue adding members to their team
const continueQuestion = [{
    type: "confirm",
    name: "continueBuilding",
    message: "Would you like to add members to your team?",
}];

// Function to prompt user whether or not they want to add more users to their team
const continueAddingMembers = () => {
    inquirer.prompt(continueQuestion)
    .then((data) => {
        if (data.continueBuilding) {
            buildTeam();
        }
        else {
            fs.writeFile("./dist/index.html", `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                <title>Team Builder</title>
            </head>
            <body>
                <header class="d-flex bg-danger text-white justify-content-center">
                    <h1>My Team</h1>
                </header>
            
                <main class="container-fluid">
            
                    <div class="row no-gutters d-flex justify-content-around m-2">
                        ${textToAppend}
                    </div>
            
                </main>
            
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
                <script src="../index.js"></script>
            </body>
            </html>`, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Successfully generated new HTML file")
                }
            })
        }
    })
};

const appendText = (data) => {
    switch (data.getRole()) {
        case "Manager":
            textToAppend += `<div class="card col-3">
            <div class="card-header bg-primary text-white">
                <div class="card-title">
                    ${data.getName()}
                </div>
                <div class="card-text">
                    ${data.getRole()}
                </div>
            </div>
            <div class="card-body container-fluid">
                <div class="row">
                    <div class="col-12 border border-dark rounded mt-1">
                        ID: ${data.getId()}
                    </div>
                    <div class="col-12 border border-dark rounded mt-1">
                        Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
                    </div>
                    <div class="col-12 border border-dark rounded mt-1">
                       Office #: ${data.getOfficeNumber()}
                    </div>
                </div>
            </div>
        </div>`
        break;

        case "Engineer":

            const github = data.getGithub();
            textToAppend += `
            <div class="card col-3">
                    <div class="card-header bg-primary text-white">
                        <div class="card-title">
                            ${data.getName()}
                        </div>
                        <div class="card-text">
                            ${data.getRole()}
                        </div>
                    </div>
                    <div class="card-body container-fluid">
                        <div class="row">
                            <div class="col-12 border border-dark rounded mt-1">
                                ID: ${data.getId()}
                            </div>
                            <div class="col-12 border border-dark rounded mt-1">
                               Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
                            </div>
                            <div class="col-12 border border-dark rounded mt-1">
                                Github: <a href="https://www.github.com/${github}" target="_blank">${github}</a>
                            </div>
                        </div>
                    </div>
                </div>`
            break;

        case "Employee":

           textToAppend += `<div class="card col-3">
            <div class="card-header bg-primary text-white">
                <div class="card-title">
                    ${data.getName()}
                </div>
                <div class="card-text">
                    ${data.getRole()}
                </div>
            </div>
            <div class="card-body container-fluid">
                <div class="row">
                    <div class="col-12 border border-dark rounded mt-1">
                        ID: ${data.getId()}
                    </div>
                    <div class="col-12 border border-dark rounded mt-1">
                       Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
                    </div>
                </div>
            </div>
        </div>`
        break;

        case "Intern":

            textToAppend += `<div class="card col-3">
            <div class="card-header bg-primary text-white">
                <div class="card-title">
                    ${data.getName()}
                </div>
                <div class="card-text">
                    ${data.getRole()}
                </div>
            </div>
            <div class="card-body container-fluid">
                <div class="row">
                    <div class="col-12 border border-dark rounded mt-1">
                       ID: ${data.getId()}
                    </div>
                    <div class="col-12 border border-dark rounded mt-1">
                        Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
                    </div>
                    <div class="col-12 border border-dark rounded mt-1">
                        School: ${data.getSchool()}
                    </div>
                </div>
            </div>
        </div>`
        break;
    }
};

// Function to build individual members by prompting specific questions for each type of employee
const buildIndividualMember = (d) => {
    switch (d.member) {
        case "Manager":
            inquirer.prompt(managerQuestions)
            .then(newClassInstance)
            .then(appendText)
            .then(continueAddingMembers);
            break;

        case "Engineer":
            inquirer.prompt(engineerQuestions)
            .then(newClassInstance)
            .then(appendText)
            .then(continueAddingMembers);
            break;

        case "Employee":
            inquirer.prompt(employeeQuestions)
            .then(newClassInstance)
            .then(appendText)
            .then(continueAddingMembers);
            break;
        
        case "Intern":
            inquirer.prompt(internQuestions)
            .then(newClassInstance)
            .then(appendText)
            .then(continueAddingMembers);
            break;
    };
};

// Question to prompt user for type of member they wish to add to their team
const startQuestion = [{
    type: "list",
    name: "member",
    message: "Choose the type of employee you wish to add to your team",
    choices: ["Manager", "Engineer", "Employee", "Intern"],
}];

// Function to build team
const buildTeam = () => {
    inquirer.prompt(startQuestion)
    .then(buildIndividualMember)
};

// Function to initialize application
const init = () => {
    buildTeam()
}

init();