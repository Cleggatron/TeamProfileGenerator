const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email){
        const role = "Intern";

        super(name, id, email);
        this.role = role;
    }
}

module.exports = Intern;