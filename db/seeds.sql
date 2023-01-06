INSERT INTO department (name)
VALUES ("Accounting"),
       ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Manager", 100000, 1),
       ("Accounts Payable", 100000, 1)
       ("Digital Marketing Manager", 100000, 2);
       ("Graphic Designer", 100000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- questions: how do i do manager ids?
--/-- how do i select options from the database i started?
VALUES ("Stephanie", "Garcia", 1);
       ("Keith", "Evensen", 2, 1);
       ("Jasmine", "Cho", 3);
       ("Thomas", "Foster", 4, 3);
    