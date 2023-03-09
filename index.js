const inquirer = require("inquirer");
require('console.table');
const db = require("./db/connection.js");

const mainMenu = () => {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee"]
    }).then(answer => {
        if (answer.task === "View Departments") {
            viewDepartments()
        } 
        else if (answer.task === "View Roles") {
            viewRoles()
        } else if (answer.task === "View Employees") {
            viewEmployees()
        } else if (answer.task === "Add Department") {
            addDepartment()
        } else if (answer.task === "Add Role") {
            addRole()
        } else if (answer.task === "Add Employee") {
            addEmployee()
        }
    })
}

const viewDepartments = () => {
    const sql = 'select * from department;'
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(rows)
        mainMenu()
    })
};

const viewRoles = () => {
    const sql = "SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id"
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(rows)
        mainMenu()
    })
}
const viewEmployees = () => {
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id"
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(rows)
        mainMenu()
    })
}
const addDepartment = () => {
    inquirer.prompt({ type: "input", name: "department", message: "Enter your department name." }).then(answer => {
        console.log(answer)
        let answerObject = { name: answer.department }
        let sql = "INSERT INTO department SET ?"
        mainMenu()
    })
}
const addRole = () => { 
    inquirer.prompt({ type: "input", name: "role", message: "Enter your role name." }).then(answer => {
        console.log(answer)
        let answerObject = { name: answer.role }
        let sql = "INSERT INTO role SET ?"
        mainMenu()
    })
}
const addEmployee = () => { 
    inquirer.prompt({ type: "input", name: "firstName", message: "Enter your employee's first name." }, { type: "input", name: "lastName", message: "Enter your employee's last name." }).then(answer => {
        console.log(answer)
        let answerObject = { name: answer.employee }
        let sql = "INSERT INTO employee SET ?"
        mainMenu()
    })
}

mainMenu()