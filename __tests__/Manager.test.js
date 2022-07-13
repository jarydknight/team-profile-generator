const Manager = require("../lib/manager");

//Test creation of Manager class
test("Creates and Manager class", () => {
    const testManager = new Manager("Rengoku", "Hashira 01", "kyojuro.rengoku@gmail.com", "100");

    expect(testManager.name).toBe("Rengoku");
    expect(testManager.id).toBe("Hashira 01");
    expect(testManager.email).toBe("kyojuro.rengoku@gmail.com")
    expect(testManager.officeNumber).toBe("100")
});

test("Manager.getName() returns name property of Manager", () => {
    const testManager = new Manager("Uzui", "Hashira 02", "tengen.uzui@gmail.com", "101");
    
    expect(testManager.getName()).toBe("Uzui");
});

test("Manager.getId() returns id property of Manager", () => {
    const testManager = new Manager("Kocho", "Hashira 03", "kocho.shinobu@gmail.com", "102");
    
    expect(testManager.getId()).toBe("Hashira 03");
});

test("Manager.getEmail() returns email property of Manager", () => {
    const testManager = new Manager("Iguro", "Hashira 04", "obanai.iguro@gmail.com", "103");
    
    expect(testManager.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("Manager.getRole() returns 'Manager'", () => {
    const testManager = new Manager("Tomioka", "Hashira 05", "giyu.tomioka#gmail.com", "104");
    expect(testManager.getRole()).toBe("Manager");
});

test("Manager.officeNumber() returns 'Demon Slayer Corps'", () => {
    const testManager = new Manager("Shinazugawa", "Hashira 06", "sanemi.shinzugawa@gmail.com", "105");
    expect(testManager.getOfficeNumber()).toBe("105");
})