// setup intern dependency
const Intern = require("../lib/Intern");

// test setting school via constructor
test("Can set school via constructor", () => {
  const testValue = "Baruch College";
  const e = new Intern("Moo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

// test getRole() in intern
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Moo", 1, "test@test.com", "Baruch College");
  expect(e.getRole()).toBe(testValue);
});

// test getSchool()
test("Can get school via getSchool()", () => {
  const testValue = "Baruch College";
  const e = new Intern("Moo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
