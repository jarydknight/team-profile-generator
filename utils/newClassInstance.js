const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const newClassInstance = (data, member) => {
    let obj

    if (data.office) {
        obj = new Manager(data.name, data.id, data.email, data.office);
    }
    else if (data.github) {
        obj = new Engineer(data.name, data.id, data.email, data.github);
    }
    else if (data.school) {
        obj = new Intern(data.name, data.id, data.email, data.school)
    }
    else {
        obj = new Employee(data.name, data.id, data.email)
    }
    return obj;
};

module.exports = newClassInstance;