// Import the filesystem module
const fs = require('fs');
const allTeamMembers = require('./index');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamHTML = [];
let tempHTML = '';


const generateHTMLTemplate = (allTeamMembers) => {

  const createManager = (manager) => {
    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();
  
    let managerCard = 
    `<div className="manager-container">
      <p>${manager.getName()}</p>
      <p> ${manager.getId()}</p>
      <p> ${manager.getEmail()}</p>
      <p>${manager.getOfficeNumber()}</p>
      <p>${manager.getRole()}</p>
    </div>`

    teamHTML.push(managerCard);  
  }

  const createEngineer = (engineer) => {
    let engineerCard = 
    `<div className="engineer-container">
    <p> ${engineer.getName()}</p>
    <p>${engineer.getId()}</p>
    <p>${engineer.getEmail()}</p>
    <p>${engineer.getGithub()}</p>
    <p>${engineer.getRole()}</p>
    </div>`
    teamHTML.push(engineerCard);  
  }

  const createIntern = (intern) => {
    let internCard = 
    `<div className="intern-container">
      ${intern.getName()};
      ${intern.getId()};
      ${intern.getEmail()};
      ${intern.getSchool()};
      ${intern.getRole()};
    </div>`
    teamHTML.push(internCard);  
  }

  for(let i= 0; i < allTeamMembers.length; i++) {
    if(allTeamMembers[i].getRole() === 'Manager') {
      createManager(allTeamMembers[i]);
    }
    if(allTeamMembers[i].getRole() === 'Engineer') {
      createEngineer(allTeamMembers[i]);
    }
    if(allTeamMembers[i].getRole() === 'Intern') {
      createIntern(allTeamMembers[i]);
    }

  }
  
  for(var i = 0; i < teamHTML.length; i++){
    console.log(teamHTML[i])
    tempHTML =  tempHTML + teamHTML[i];
  }


  let template = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  </head>
  
  <body>
      <main>
         ${tempHTML};
      </main>
  
  </body>
  
  <footer>
  
  </footer>`
    return template;
} 



// module.exports = myTeam();



// const names = [ 'bill', 'jane', 'joe'];

// let data = '';

// for(var i = 0; i < names.length; i ++){
//     data = data + names[i] ;
// }

  



module.exports = generateHTMLTemplate;