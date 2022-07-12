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
    
    expect(testEmployee.name).toBe("Uzui");
    expect(testEmployee.id).toBe("Hashira 02");
    expect(testEmployee.email).toBe("tengen.uzui@gmail.com")
});