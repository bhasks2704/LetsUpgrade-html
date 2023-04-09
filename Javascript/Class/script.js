class Person {
  static PersonName = "Bhaskar";
}

class Employee extends Person {
  static CompanyName = "Google";
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  getdata() {
    let data = `
    Name :${this.name}
    age :${this.age}
    Salary :${this.salary}`;

    return data;
  }
}

let employee = new Employee("Bhaskar", "27", "50000");
console.log(employee.getdata());
