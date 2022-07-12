const Employee = require("../lib/employee");

//Test creation of employee class
test("Creates and Employee class", () => {
    const testEmployee = new Employee("Rengoku", "Hashira 01", "kyojuro.rengoku@gmail.com" );

    expect(testEmployee.name).toBe("Rengoku");
    expect(testEmployee.id).toBe("Hashira 01");
    expect(testEmployee.email).toBe("kyojuro.rengoku@gmail.com")
});