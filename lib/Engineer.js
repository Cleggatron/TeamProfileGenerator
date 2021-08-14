const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        const role = "Engineer";
        
        super(name, id, email);
        this.role = role;        
        this.github = github
    }

    getGithub = () => this.github;
}

module.exports = Engineer