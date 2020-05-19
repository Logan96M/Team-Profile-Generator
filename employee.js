var info = require('./index.js');

function Employee(name, ID, title) {
    this.name = name;
    this.ID = ID;
    this.title = title;
}

let employee01 = new Employee(`${info.name}`, `${info.ID}`, 'hey' )

console.log(employee01)
 


// let employee = new Object();

// employee.name = name
// employee.ID = info.ID
// employee.email = info.email

// console.log(employee)