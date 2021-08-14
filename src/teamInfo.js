//Import our dependencies
const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer.js")
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");

//Will store our team members as we build them
const teamMembers = [];

const managerDetails = () =>{
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the team manager.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the Employee ID.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter this Employee's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter this Manager's office number.",
            name: "officeNumber"
        }
    ])
    .then( details => {
        const {name, id, email, officeNumber} = details
        teamMembers.push(new Manager(name, id, email, officeNumber))
        console.log(teamMembers);
    })
}

const internDetails = () =>{
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of this intern.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the intern's employee ID.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter this intern's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter this intern's school.",
            name: "school"
        }
    ])
    .then( details => {
        const {name, id, email, school} = details
        teamMembers.push(new Intern(name, id, email, school));
        console.log(teamMembers);
    })
}

const engineerDetails = () =>{
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the engineer.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the engineer's employee ID.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter this engineer's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter this engineer's Github username.",
            name: "github"
        }
    ])
    .then( details => {
        const {name, id, email, github} = details
        teamMembers.push(new Engineer(name, id, email, github));
        console.log(teamMembers);
    })
}

