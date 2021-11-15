const inquirer = require('inquirer');
const fs = require('fs');
const allTeamMembers = [];
// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTMLTemplate = require('./fs');


generateTeam = () => {
    fs.writeFileSync('My_Team.html', generateHTMLTemplate(allTeamMembers))
}


const ManagerPrompt = () => {
    return inquirer.prompt([
    {
        type: 'text',
        name: 'employeeName',
        message: 'What is the name of the Manager?',
        validate: employeeName => {
            if (employeeName) {
              return true;
            } else {
              console.log('Manager Name Required!');
              return false;
            }
          }
    },
    {
        type: 'text',
        name: 'employeeId',
        message: 'What is the ID for this Manager?',
        validate: employeeId => {
            if (employeeId) {
              return true;
            } else {
              console.log('You must provide the Employee ID.');
              return false;
            }
          }
    },
    {
        type: 'text',
        name: 'employeeEmail',
        message: 'What is the email for the Manager?',
        validate: employeeEmail => {
            if (employeeEmail) {
              return true;
            } else {
              console.log('You must provide the Employee email.');
              return false;
            }
          }
    },
    {
        type: 'text',
        name: 'OfficeNumber',
        message: 'What is the office number for the manager?',
        validate: OfficeNumber => {
            if (OfficeNumber) {
              return true;
            } else {
              console.log('You must provide the office number.');
              return false;
            }
          }
    }
      
    ])
    .then(inputs => {
        const manager = new Manager(inputs.employeeName, inputs.employeeId, inputs.employeeEmail, inputs.OfficeNumber);
        allTeamMembers.push(manager);
        teamBuilder();
    })

};

const teamBuilder = () => {
    return inquirer.prompt([
    
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ["Add Engineer", "Add Intern", "Finished"]
        }
        ])
        .then(selectedAction => {
            switch(selectedAction.menu) {
                case "Add Engineer":
                    EngineerPrompt();
                    break;
                case "Add Intern":
                    InternPrompt();
                    break;
                default:
                    generateTeam();
            }
    })
};

const EngineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'employeeName',
            message: 'What is the name of the Engineer?',
            validate: employeeName => {
                if (employeeName) {
                  return true;
                } else {
                  console.log('Engineer Name Required!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: 'What is the ID for this Engineer?',
            validate: employeeId => {
                if (employeeId) {
                  return true;
                } else {
                  console.log('You must provide the Employee ID.');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'employeeEmail',
            message: 'What is the email for the Engineer?',
            validate: employeeEmail => {
                if (employeeEmail) {
                  return true;
                } else {
                  console.log('You must provide the Employee email.');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the github username for the Engineer?",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log('You must provide the github username.');
                  return false;
                }
              }
        }
    ])
    .then(inputs => {
        const engineer = new Engineer(inputs.employeeName, inputs.employeeId, inputs.employeeEmail, inputs.github);
        allTeamMembers.push(engineer);
        teamBuilder();
    })
};

const InternPrompt = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'employeeName',
            message: 'What is the name of the Intern?',
            validate: employeeName => {
                if (employeeName) {
                  return true;
                } else {
                  console.log('Intern Name Required!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: 'What is the ID for this Intern?',
            validate: employeeId => {
                if (employeeId) {
                  return true;
                } else {
                  console.log('You must provide the Employee ID.');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'employeeEmail',
            message: 'What is the email for the Intern?',
            validate: employeeEmail => {
                if (employeeEmail) {
                  return true;
                } else {
                  console.log('You must provide the Employee email.');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'school',
            message: 'What School does this Intern attend?',
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log('You must provide the school for the Intern.');
                  return false;
                }
              }
        }
    ])
        .then(inputs => {
            const intern = new Intern(inputs.employeeName, inputs.employeeId, inputs.employeeEmail, inputs.school);
            allTeamMembers.push(intern);
            teamBuilder();
        })
};


function init() {
    console.log("Let's build your team!");
    console.log("First, let's start with the team's Manager.");
    ManagerPrompt();
        }

init();