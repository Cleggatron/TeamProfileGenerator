const Manager = require("../lib/Manager.js");

describe("intern", () => {
    it("should create a new object containing name, id, and email properties when called", () =>{
        const testManager = new Manager("John", 4, "John@testemail.com", "1");

        expect("name" in testManager).toEqual(true); 
        expect("id" in testManager).toEqual(true); 
        expect("email" in testManager).toEqual(true);  
        expect("role" in testManager).toEqual(true);  
        expect("officeNumber" in testManager).toEqual(true);
    });

    it("should return the correct name when getName() is called", () =>{
        const testManager = new Manager("John", 4, "John@testemail.com", "1")

        expect(testManager.getName()).toEqual(testManager.name);
    });
    
    it("should return the correct id when getId() is called", () =>{
        const testManager = new Manager("John", 4, "John@testemail.com", "1")

        expect(testManager.getId()).toEqual(testManager.id);
    });
    
    it("should return the correct name when getEmail() is called", () =>{
        const testManager = new Manager("John", 4, "John@testemail.com", "1")

        expect(testManager.getEmail()).toEqual(testManager.email);
    });

    it("should return Engineer when getRole() is called", () =>{
        const testManager = new Manager("John", 4, "John@testemail.com", "1")

        expect(testManager.getRole()).toEqual("Manager");
    });
})