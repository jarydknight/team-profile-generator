const Employee = require("../lib/employee");

//Test creation of employee class
test("Creates and Employee class", () => {
    const testEmployee = new Employee("Rengoku", "Hashira 01", "kyojuro.rengoku@gmail.com" );

    expect(testEmployee.name).toBe("Rengoku");
    expect(testEmployee.id).toBe("Hashira 01");
    expect(testEmployee.email).toBe("kyojuro.rengoku@gmail.com")
});

test("Employee.getName() returns name property of employee", () => {
    const testEmployee = new Employee("Uzui", "Hashira 02", "tengen.uzui@gmail.com");
    
    expect(testEmployee.getName()).toBe("Uzui");
});

test("Employee.getId() returns id property of employee", () => {
    const testEmployee = new Employee("Kocho", "Hashira 03", "Kocho.shinobu@gmail.com");
    
    expect(testEmployee.getId()).toBe("Hashira 03");
});

test("Employee.getEmail() returns email property of employee", () => {
    const testEmployee = new Employee("Iguro", "Hashira 04", "obanai.iguro@gmail.com");
    
    expect(testEmployee.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("Employee.getRole() returns 'Employee'", () => {
    const testEmployee = new Employee("Tomioka", "Hashira 05", "giyu.tomioka@gmail.com");

    expect(testEmployee.getRole()).toBe("Employee");
});