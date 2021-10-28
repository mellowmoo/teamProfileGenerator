// engineer dependency
const Engineer = require("../lib/Engineer");

// Set Github w/ constructor
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Moo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

// getRole() test for engineer
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Moo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

// getGithub()
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Moo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
