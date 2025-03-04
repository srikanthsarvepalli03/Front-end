interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}

let emp = new Employee("John", 30, 123);
console.log(emp.getEmployeeDetails());