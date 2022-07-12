class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
};

Employee.prototype.getName = function () {
    return this.name;
};

module.exports = Employee;