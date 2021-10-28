// Employee dependency
const Employee = require('../lib/Employee');

// test to see if Employe initializes as an object
test('Can instantiate Employee instantce', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

// test to see if name works
test("Can set name via constructor arguments", () => {
    const name = "Mellow";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// test id
test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Moo", testValue);
    expect(e.id).toBe(testValue);
});

// test email
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Moo", 1, testValue);
    expect(e.email).toBe(testValue);
});

// test getName()
test("Can get name via getName()", () => {
    const testValue = "Mellow";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

// test getID()
test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Moo", testValue);
    expect(e.getId()).toBe(testValue);
});

// test getEmail()
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Moo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

// test getRole()
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Mellow", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});