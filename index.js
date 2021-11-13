const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const allTeamMembers = [];

const teamBuilder = () => {
return inquirer.prompt([
    {
        type: 'checkbox',
        name: 'menu',
        message: 'What team member would you like to add?',
        choices: ["Manager", "Engineer", "Intern", "Finished"]
    }
    ])
}

const ManagerPrompt = () => {
    return inquirer.prompt([
    {
        type: 'text',
        name: 'ManagerName',
        message: 'What is the name of the Manager?',
        validate: ManagerName => {
            if (ManagerName) {
              return true;
            } else {
              console.log('Manager Name Required!');
              return false;
            }
          }
    },
    {
        type: 'text',
        name: 'OfficeNumber',
        message: 'What is the office number for the manager?'    
    },
    {
        
    }
    ])
}

generateTeam = () => {
    fs.writeFile('My_Team', html, {

    })
}

function init() {
    console.log("Let's build your team!");
    teamBuilder()
        .then(responses => {
            if(responses.menu.choices === "Manager") {
               const managerInfo =  ManagerPrompt();
               const newManager = new Manager(managerInfo.ManagerName, managerInfo.ManagerOffice, managerInfo.Id);
               allTeamMembers.push(newManager);
               teamBuilder();

            } else if(responses.menu.choices === "Engineer") {
                EngineerPrompt();
            } else if(responses.menu.choices === "Intern") {
                InternPrompt();
            } else {
                generateTeam();
            }
        })
}

init();