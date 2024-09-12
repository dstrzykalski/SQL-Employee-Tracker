const inquirer = require('inquirer');
const { query } = require('./config/connection');

// Function to start the application
function startApp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit'
                ]
            }
        ])
        .then((answers) => {
            // Call the appropriate function based on the user's choice
            switch (answers.option) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    break;
                default:
                    console.log('Invalid option');
                    break;
            }
        });
}

// Function to view all departments
function viewAllDepartments() {
    const departments = query('SELECT * FROM departments');
    console.log('All Departments:');
    departments.forEach((department) => {
        console.log(`ID: ${department.id} | Name: ${department.name}`);
    });
}

// Function to view all roles
function viewAllRoles() {
    const roles = query('SELECT * FROM roles');
    console.log('All Roles:');
    roles.forEach((role) => {
        console.log(`ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`);
    });
} 


// Function to view all employees
function viewAllEmployees() {
    const employees = query('SELECT * FROM employees');
    console.log('All Employees:');
    employees.forEach((employee) => {
        console.log(`ID: ${employee.id} | First Name: ${employee.first_name} | Last Name: ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
    });
}

// Function to add a department
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the department name:'
            }
        ])
        .then((answers) => {
            query('INSERT INTO departments SET ?', { name: answers.name });
            console.log('Department added successfully');
            startApp();
        });
}

// Function to add a role
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the role title:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the role salary:'
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter the role department ID:'
            }
        ])
        .then((answers) => {
            query('INSERT INTO roles SET ?', { title: answers.title, salary: answers.salary, department_id: answers.department_id });
            console.log('Role added successfully');
            startApp();
        });
}  

// Function to add an employee
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the employee first name:'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the employee last name:'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the employee role ID:'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the employee manager ID:'
            }
        ])
        .then((answers) => {
            query('INSERT INTO employees SET ?', { first_name: answers.first_name, last_name: answers.last_name, role_id: answers.role_id, manager_id: answers.manager_id });
            console.log('Employee added successfully');
            startApp();
        });
}

// Function to update an employee role
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee_id',
                message: 'Enter the employee ID:'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the new role ID:'
            }
        ])
        .then((answers) => {
            query('UPDATE employees SET role_id = ? WHERE id = ?', [answers.role_id, answers.employee_id]);
            console.log('Employee role updated successfully');
            startApp();
        });
} 

// Start the application
startApp();