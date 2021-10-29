// set up dependencies
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// test set office w/ constructor arg
test('Setting office number via Constructor argument', () => {
    const testValue = 420;
    const e = new Manager('Moo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

// test getRole() in manager
test('getRole() returns \'Manager\'', () => {
    const testValue = 'Manager';
    const e = new Manager('Moo', 1, 'test@test.com', 420);
    expect(e.getRole()).toBe(testValue);
});

// test getOffice()
test('getOffice() gets office number', () => {
    const testValue = 420;
    const e = new Manager('Moo', 1, 'test@test.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});