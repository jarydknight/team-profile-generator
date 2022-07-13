// const buildTeam = require("./utils/buildTeam");
const managerQuestions = require("./utils/managerQuestions");
const engineerQuestions = require("./utils/engineerQuestions");
const employeeQuestions = require("./utils/employeeQuestions");
const internQuestions = require("./utils/internQuestions");
const inquirer = require("inquirer");

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
    })
};

// Function to build individual members by prompting specific questions for each type of employee
const buildIndividualMember = (data) => {
    switch (data.member) {
        case "Manager":
            inquirer.prompt(managerQuestions)
            .then(continueAddingMembers);
            break;

        case "Engineer":
            inquirer.prompt(engineerQuestions)
            .then(continueAddingMembers);
            break;

        case "Employee":
            inquirer.prompt(employeeQuestions)
            .then(continueAddingMembers);
            break;
        
        case "Intern":
            inquirer.prompt(internQuestions)
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