// engineer is a child of employee
// set up employee dependency
const Employee = require('./Employee');

// setup Engineer as a child of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // methods
    // override getRole() to return engineer
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }

}

// export Engineer
module.exports = Engineer;