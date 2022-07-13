const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
};

Intern.prototype.getRoll = function() {
    return "Intern";
};

module.exports = Intern;