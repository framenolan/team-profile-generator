// imports classes and modules to be used in app
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')
const generateTeam = require('./util/generateHtml')

// array that will be built as user adds new team members
const team = [];


// function that initialized team build, starting with team Manager
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

        // function to give user option to add additional team members or finalize team
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

        // recursive function that allows user to continue adding team members or finalize team
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

        // recursive function that allows user to continue adding team members or finalize team
        menu();
    })
}

// function to categorize whether new team member should be created using Engineer questions or Intern questions
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

// recursive function that allows user to add a new team member or to exit the team building process and create HTML page
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
            
            // creates HTML page using data entered by user
            fs.writeFile('myteam.html', generateTeam(team), (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        }
    })
}

newManager();


