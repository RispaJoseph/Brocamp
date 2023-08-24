class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        document.write("Salary of " + this.name + " is " + this.salary);
    }
}

class Manager extends Employee{

}

class Supervisor extends Employee{

}

let s1 = new Supervisor("Peter", "operation", 40000);
console.log(s1);
s1.getSalary();
document.write(s1.salary);