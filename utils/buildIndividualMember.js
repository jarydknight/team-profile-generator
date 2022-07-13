const managerQuestions = require("./managerQuestions");
const engineerQuestions = require("./engineerQuestions");
const employeeQuestions = require("./employeeQuestions");
const internQuestions = require("./internQuestions");
const inquirer = require("inquirer");

const buildIndividualMember = (data) => {
    switch (data.member) {
        case "Manager":
            inquirer.prompt(managerQuestions);
            break;

        case "Engineer":
            inquirer.prompt(engineerQuestions);
            break;

        case "Employee":
            inquirer.prompt(employeeQuestions);
            break;
        
        case "Intern":
            inquirer.prompt(internQuestions);
            break;
    }
};

module.exports = buildIndividualMember;