const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// const { chown } = require('fs')
// const Choice = require('inquirer/lib/objects/choice')
const team = [];

function newManager () {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager Email:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Manager Office Number:',
        },
    ])
    .then((data) => {
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        console.log(newManager)
        team.push(newManager)
        console.log(team)
        menu();
    })
}

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer Email:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username:',
        },
    ])
    .then((data) => {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        console.log(newEngineer)
        team.push(newEngineer)
        console.log(team)
        menu();
    })
}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Intern ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern Email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern School:',
        },
    ])
    .then((data) => {
        const newIntern= new Intern(data.name, data.id, data.email, data.school);
        console.log(newIntern)
        team.push(newIntern)
        console.log(team)
        menu();
    })
}

function newEmployee () {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role is this employee?',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then((data) => {
        if(data.role === 'Engineer') {
            addEngineer();
        } else if (data.role === 'Intern') {
            addIntern();
        } else {
            console.log("in else")
        }
    })
}

function menu() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add Employee', 'Finish Team']
        }
    ])
    .then((data) => {
        if (data.action === 'Add Employee') {
            newEmployee();
        } else {
            console.log("print the page")
        }
    })
}

newManager();

