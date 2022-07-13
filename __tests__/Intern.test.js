const Intern = require("../lib/intern");

//Test creation of Intern class
test("Creates and Intern class", () => {
    const testIntern = new Intern("Rengoku", "Hashira 01", "kyojuro.rengoku@gmail.com", "Demon Slayer Corps");

    expect(testIntern.name).toBe("Rengoku");
    expect(testIntern.id).toBe("Hashira 01");
    expect(testIntern.email).toBe("kyojuro.rengoku@gmail.com")
    expect(testIntern.school).toBe("Demon Slayer Corps")
});

test("Intern.getName() returns name property of Intern", () => {
    const testIntern = new Intern("Uzui", "Hashira 02", "tengen.uzui@gmail.com", "Demon Slayer Corps");
    
    expect(testIntern.getName()).toBe("Uzui");
});

test("Intern.getId() returns id property of Intern", () => {
    const testIntern = new Intern("Kocho", "Hashira 03", "tengen.uzui@gmail.com", "Demon Slayer Corps");
    
    expect(testIntern.getId()).toBe("Hashira 03");
});

test("Intern.getEmail() returns email property of Intern", () => {
    const testIntern = new Intern("Iguro", "Hashira 04", "obanai.iguro@gmail.com", "Demon Slayer Corps");
    
    expect(testIntern.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("Intern.getRole() returns 'Intern'", () => {
    const testIntern = new Intern("Tomioka", "Hashira 05", "giyu.tomioka#gmail.com", "Demon Slayer Corps");
    expect(testIntern.getRoll()).toBe("Intern");
});