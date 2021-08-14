const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email){
        const role = "Manager";

        super(name, id, email);
        this.role = role;
    }
}

module.exports = Manager;