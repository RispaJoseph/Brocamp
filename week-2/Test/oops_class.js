class Employee{
    constructor(name, position, salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }

    getSalary(){
        document.write("Salary of " + this.name + " is " + this.salary)
    }
}


let e1 = new Employee("John", "Accountant", 30000);
let e2 = new Employee("Anil", "Supervisor", 40000);
document.write(e1.salary);

document.write("<br>");
e2.getSalary();

document.write("<br>");
e1.getSalary(); 