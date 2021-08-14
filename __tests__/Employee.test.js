const Employee = require("../lib/Employee.js")

describe("Employee", () => {
    it("should create a new object containing name, id, email, and role properties when called", () =>{
        const testEmployee = new Employee("John", 4, "John@testemail.com")

        expect("name" in testEmployee).toEqual(true); 
        expect("id" in testEmployee).toEqual(true); 
        expect("email" in testEmployee).toEqual(true); 
        expect("role" in testEmployee).toEqual(true); 
    });

    it("should return the correct name when getName() is called", () =>{
        const testEmployee = new Employee("John", 4, "John@testemail.com")

        expect(testEmployee.getName()).toEqual(testEmployee.name);
    });
    
    it("should return the correct id when getId() is called", () =>{
        const testEmployee = new Employee("John", 4, "John@testemail.com")

        expect(testEmployee.getId()).toEqual(testEmployee.id);
    });
    
    it("should return the correct name when getEmail() is called", () =>{
        const testEmployee = new Employee("John", 4, "John@testemail.com")

        expect(testEmployee.getEmail()).toEqual(testEmployee.email);
    });
    it("should return the employee when getRole() is called", () =>{
        const testEmployee = new Employee("John", 4, "John@testemail.com")

        expect(testEmployee.getRole()).toEqual("Employee");
    });
    

})