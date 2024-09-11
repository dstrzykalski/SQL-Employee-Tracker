-- Creates department table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- Creates role table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (id)
);

-- Creates employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
);

-- Seeds Department Table
INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Marketing');

-- Seeds the Role Table
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 80000, 1),
             ('Sales Representative', 50000, 1),
             ('Software Engineer', 90000, 2),
             ('Quality Assurance Engineer', 70000, 2),
             ('Financial Analyst', 75000, 3),
             ('Marketing Manager', 85000, 4),
             ('Marketing Coordinator', 55000, 4);

-- Seeds the Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
             ('David', 'Jones', 2, 1),
             ('David', 'Crocket', 3, 1),
             ('Johnny', 'Cash-Williams', 4, 2),
             ('Jackson', 'Browne', 5, 2),
             ('Peter', 'Piper', 6, 3),
             ('Lebron', 'James', 7, 3);