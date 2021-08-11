const Engineer = require("../lib/Engineer.js");

describe("Engineer", () =>{
    it("should create a new object containing name, id, and email properties when called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com");

        expect("name" in testEngineer).toEqual(true); 
        expect("id" in testEngineer).toEqual(true); 
        expect("email" in testEngineer).toEqual(true);  
        expect("role" in testEngineer).toEqual(true);  
    });

    it("should return the correct name when getName() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com")

        expect(testEngineer.getName()).toEqual(testEngineer.name);
    });
    
    it("should return the correct id when getId() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com")

        expect(testEngineer.getId()).toEqual(testEngineer.id);
    });
    
    it("should return the correct name when getEmail() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com")

        expect(testEngineer.getEmail()).toEqual(testEngineer.email);
    });

    it("should return the employee when getRole() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com")

        expect(testEngineer.getRole()).toEqual("Engineer");
    });
    
    
})