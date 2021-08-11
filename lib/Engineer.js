const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email){
        const role = "Engineer";
        
        super(name, id, email);
        this.role = role;        
    }
}

module.exports = Engineer