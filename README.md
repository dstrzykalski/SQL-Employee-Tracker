# SQL-Employee-Tracker

Challenge 10 - Daved Strzykalski

<img width="959" alt="Challenge-10-Screenshot" src="https://github.com/user-attachments/assets/e1d6aaf6-9c4e-4374-8215-4141f09a5b29">


## Video Link

Video Demo Link-<https://drive.google.com/file/d/1HxY3fBxiP0fxSZ4JfZyw3Q37jLnHu0XG/view>.

## Features

Command Line Application which allows users to manage employee data.
Uses Postgres and Sequelize.

## Author

Daved Strzykalski
<https://github.com/dstrzykalski>

## Issues

An Issue in Running the App Exists at The Moment as Addressed in the Video

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
