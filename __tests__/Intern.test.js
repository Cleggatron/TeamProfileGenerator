const Intern = require("../lib/Intern.js");

describe("intern", () => {
    it("should create a new object containing name, id, and email properties when called", () =>{
        const testIntern = new Intern("John", 4, "John@testemail.com");

        expect("name" in testIntern).toEqual(true); 
        expect("id" in testIntern).toEqual(true); 
        expect("email" in testIntern).toEqual(true);  
        expect("role" in testIntern).toEqual(true);  
    });

    it("should return the correct name when getName() is called", () =>{
        const testIntern = new Intern("John", 4, "John@testemail.com")

        expect(testIntern.getName()).toEqual(testIntern.name);
    });
    
    it("should return the correct id when getId() is called", () =>{
        const testIntern = new Intern("John", 4, "John@testemail.com")

        expect(testIntern.getId()).toEqual(testIntern.id);
    });
    
    it("should return the correct name when getEmail() is called", () =>{
        const testIntern = new Intern("John", 4, "John@testemail.com")

        expect(testIntern.getEmail()).toEqual(testIntern.email);
    });

    it("should return Engineer when getRole() is called", () =>{
        const testIntern = new Intern("John", 4, "John@testemail.com")

        expect(testIntern.getRole()).toEqual("Intern");
    });
})