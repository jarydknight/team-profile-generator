const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
};

Intern.prototype.getRole = function() {
    return "Intern";
};

Intern.prototype.getSchool = function() {
    return this.school;
};

module.exports = Intern;