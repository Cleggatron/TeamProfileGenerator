const Engineer = require("../lib/Engineer.js");

describe("Engineer", () =>{
    it("should create a new object containing name, id, email, role, and github properties when called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com", "johnGithub");

        expect("name" in testEngineer).toEqual(true); 
        expect("id" in testEngineer).toEqual(true); 
        expect("email" in testEngineer).toEqual(true);  
        expect("role" in testEngineer).toEqual(true);  
        expect("github" in testEngineer).toEqual(true);
    });

    it("should return the correct name when getName() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com", "johnGithub")

        expect(testEngineer.getName()).toEqual(testEngineer.name);
    });
    
    it("should return the correct id when getId() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com", "johnGithub")

        expect(testEngineer.getId()).toEqual(testEngineer.id);
    });
    
    it("should return the correct name when getEmail() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com", "johnGithub")

        expect(testEngineer.getEmail()).toEqual(testEngineer.email);
    });

    it("should return the employee when getRole() is called", () =>{
        const testEngineer = new Engineer("John", 4, "John@testemail.com", "johnGithub")

        expect(testEngineer.getRole()).toEqual("Engineer");
    });

    it("should return the engineer's github username when getGithub() is called", () => {
        const testEngineer = new Engineer("John", 4, "John@testemail.com", "johnGithub")

        expect(testEngineer.getGithub()).toEqual(testEngineer.github);
    })
    
    
})