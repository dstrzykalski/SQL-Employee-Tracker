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