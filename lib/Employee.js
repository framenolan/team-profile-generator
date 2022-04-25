// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
        this.role
    }

    getName() {
        const employeeName = this.name;
        console.log(employeeName)
        return employeeName
    }
    
    getId() {
        const employeeID = this.id;
        console.log(employeeID)
        return employeeID;
    }
    
    getEmail() {
        const employeeEmail = this.email;
        console.log(employeeEmail)
        return employeeEmail;
    }

    getRole() {
        this.role = "Employee";
        return this.role;
    }
}


module.exports = Employee