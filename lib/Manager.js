const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        const role = "Manager";

        super(name, id, email);
        this.role = role;
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;