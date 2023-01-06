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
        } else if (answer.task === "View Roles") {
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
    })
};

const viewRoles = () => {
    // I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    const sql = "SELECT * FROM role"
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(rows)
    })
}
const viewEmployees = () => {
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const sql = "SELECT * FROM employee"
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(rows)
    })
}
const addDepartment = () => {
    inquirer.prompt({ type: "input", name: "department", message: "Enter your department name." }).then(answer => {
        console.log(answer)
        let answerObject = { name: answer.department }
        let sql = "INSERT INTO department SET ?"
    })
}
const addRole = () => { 
    inquirer.prompt({ type: "input", name: "role", message: "Enter your role name." }).then(answer => {
        console.log(answer)
        let answerObject = { name: answer.department }
        let sql = "INSERT INTO role SET ?"
    })
}
const addEmployee = () => { 
    //questions: do I need first and last name separate?
    //--//why are answerObject and sql not defined and what do I need to do to define them?
    inquirer.prompt({ type: "input", name: "employee", message: "Enter your employee name." }).then(answer => {
        console.log(answer)
        let answerObject = { name: answer.department }
        let sql = "INSERT INTO employee SET ?"
    })
}

mainMenu()