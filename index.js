const inquirer = require("inquirer");
const fs = require("fs");
const buildIndividualMember = require("./utils/buildIndividualMember");

const startQuestion = [{
    type: "list",
    name: "member",
    message: "Choose the type of employee you wish to add to your team",
    choices: ["Manager", "Engineer", "Employee", "Intern"],
}]



const startBuildingTeam = () => {
    inquirer.prompt(startQuestion)
    .then(buildIndividualMember)
}

startBuildingTeam();