// manager is a child of employee
// setup employee dependency
const Employee = require('./Employee')

// setup Manager as a child of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // methods
    // override getRole() to return 'Manager'
    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

// export Manager
module.exports = Manager;