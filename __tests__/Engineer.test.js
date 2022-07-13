const Engineer = require("../lib/engineer");

//Test creation of Engineer class
test("Creates and Engineer class", () => {
    const testEngineer = new Engineer("Rengoku", "Hashira 01", "kyojuro.rengoku@gmail.com", "KyojuroRengoku");

    expect(testEngineer.name).toBe("Rengoku");
    expect(testEngineer.id).toBe("Hashira 01");
    expect(testEngineer.email).toBe("kyojuro.rengoku@gmail.com")
    expect(testEngineer.github).toBe("KyojuroRengoku");
});

test("Engineer.getName() returns name property of Engineer", () => {
    const testEngineer = new Engineer("Uzui", "Hashira 02", "tengen.uzui@gmail.com", "TengenUzui");
    
    expect(testEngineer.getName()).toBe("Uzui");
});

test("Engineer.getId() returns id property of Engineer", () => {
    const testEngineer = new Engineer("Kocho", "Hashira 03", "kocho.shinobu@gmail.com", "KochoShinobu");
    
    expect(testEngineer.getId()).toBe("Hashira 03");
});

test("Engineer.getEmail() returns email property of Engineer", () => {
    const testEngineer = new Engineer("Iguro", "Hashira 04", "obanai.iguro@gmail.com", "ObanaiIguro");
    
    expect(testEngineer.getEmail()).toBe("obanai.iguro@gmail.com")
});

test("Engineer.getRole() returns 'Engineer'", () => {
    const testEngineer = new Engineer("Tomioka", "Hashira 05", "giyu.tomioka#gmail.com", "GiyuTomioka");
    expect(testEngineer.getRole()).toBe("Engineer");
});

test("Engineer.getGithub() returns ShinjiroRengoku", () => {
    const testEngineer = new Engineer("Rengoku", "Hashira 06", "shinjuro.rengoku@gmail.com", "ShinjuroRengoku");

    expect(testEngineer.getGithub()).toBe("ShinjuroRengoku");
})