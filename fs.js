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
    `<div class="card" style="width: 18 rem;">
      <h1 class="card-title">${manager.getName()}</h1>
      <h2 class="card-subtitle">${manager.getRole()}</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>`

    teamHTML.push(managerCard);  
  }

  const createEngineer = (engineer) => {
    let engineerCard = 
    `<div class="card" style="width: 18 rem;">
      <h1 class="card-title">${engineer.getName()}</h1>
      <h2 class="card-subtitle">${engineer.getRole()}</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item"> Github:<a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></li>
      </ul>
    </div>`

    teamHTML.push(engineerCard);  
  }

  const createIntern = (intern) => {
    let internCard = 
    `<div class="card mb-3" style="width: 18 rem;">
      <h1 class="card-title">${intern.getName()}</h1>
      <h2 class="card-subtitle">${intern.getRole()}</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</a></li>
      </ul>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">  
    <link rel="stylesheet" href="./dist/style.css">
  </head>
  
  <body>
      <header> 
        My Team
      </header>
      <main>
         ${tempHTML}
      </main>
  
  </body>
  
  <footer>
  
  </footer>`
    return template;
} 

module.exports = generateHTMLTemplate;