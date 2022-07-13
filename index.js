// const buildTeam = require("./utils/buildTeam");
const managerQuestions = require("./utils/managerQuestions");
const engineerQuestions = require("./utils/engineerQuestions");
const employeeQuestions = require("./utils/employeeQuestions");
const internQuestions = require("./utils/internQuestions");
const inquirer = require("inquirer");

const continueQuestion = [{
    type: "confirm",
    name: "continueBuilding",
    message: "Would you like to add members to your team?",
}];

const continueAddingMembers = () => {
    inquirer.prompt(continueQuestion)
    .then((data) => {
        if (data.continueBuilding) {
            buildTeam();
        }
    })
};

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

const startQuestion = [{
    type: "list",
    name: "member",
    message: "Choose the type of employee you wish to add to your team",
    choices: ["Manager", "Engineer", "Employee", "Intern"],
}];

const buildTeam = () => {
    inquirer.prompt(startQuestion)
    .then(buildIndividualMember)
};

const init = () => {
    buildTeam()
}

init();