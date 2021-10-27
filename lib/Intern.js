// intern is a child of employee
// setup employee dependency
const Employee = require('./Employee');

// setup Intern as a child of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // methods
    // override getRole() to return 'Intern'
    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }

}

// export Intern
module.exports = Intern;