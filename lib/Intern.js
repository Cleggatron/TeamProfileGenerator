const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        const role = "Intern";

        super(name, id, email);
        this.role = role;
        this.school = school;
    }

    getSchool = () => this.school;
}

module.exports = Intern;