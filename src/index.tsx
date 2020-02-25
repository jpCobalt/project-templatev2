class Student {
  fullName: string;
  constructor(
    public firstName: string,
    private middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.textContent = greeter(user);

// Jest test
function simpletest(a: number, b: number) {
  return a + b;
}

module.exports = simpletest;
