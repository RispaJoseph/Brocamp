let employee = {
    name : "Rispa",
    salary : 50000,
    getSalary : function(){
        document.write("Salary of "+this.name + " is " + this.salary)
    }
}

employee.getSalary();