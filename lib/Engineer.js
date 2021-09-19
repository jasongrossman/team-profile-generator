const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

module.exports = Engineer;