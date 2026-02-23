CREATE DATABASE college_db;

CREATE DATABASE IF NOT EXISTS college_db;

SHOW DATABASES;

USE college_db;

DROP DATABASE IF EXISTS dummy_db;


CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 18),
    city VARCHAR(30) DEFAULT 'Pune'
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL
);

CREATE TABLE enrollments (
    enroll_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

SHOW TABLES;


INSERT INTO students VALUES
(101, 'Sangharsh', 'sangharsh@gmail.com', 21, 'Pune'),
(102, 'Rohit', 'rohit@gmail.com', 22, 'Mumbai'),
(103, 'Amit', 'amit@gmail.com', 20, 'Nagpur'),
(104, 'Neha', 'neha@gmail.com', 23, DEFAULT);

INSERT INTO courses VALUES
(1, 'Web Development'),
(2, 'Data Structures');

INSERT INTO enrollments VALUES
(1, 101, 1),
(2, 102, 2);


SELECT * FROM students;


SELECT * FROM students
WHERE city = 'Pune';


SELECT age + 5 FROM students;

SELECT * FROM students WHERE age > 21;

SELECT 5 & 3;

SELECT * FROM students
WHERE age > 20 AND city = 'Pune';

SELECT * FROM students
WHERE city = 'Pune' OR city = 'Mumbai';

SELECT * FROM students
WHERE NOT city = 'Nagpur';

SELECT * FROM students
WHERE age BETWEEN 20 AND 22;

SELECT * FROM students
WHERE city IN ('Pune','Mumbai');

SELECT * FROM students
WHERE city NOT IN ('Pune','Mumbai');


SELECT * FROM students
ORDER BY age DESC;

SELECT * FROM students
LIMIT 2;


SELECT COUNT(*) FROM students;

SELECT MIN(age) FROM students;

SELECT MAX(age) FROM students;

SELECT SUM(age) FROM students;

SELECT AVG(age) FROM students;


SELECT city, COUNT(*) AS total_students
FROM students
GROUP BY city;

SELECT city, COUNT(*) AS total_students
FROM students
GROUP BY city
HAVING COUNT(*) > 1;


UPDATE students
SET city = 'Delhi'
WHERE student_id = 103;


ALTER TABLE students
ADD phone VARCHAR(15);

ALTER TABLE students
RENAME COLUMN phone TO mobile;

ALTER TABLE students
MODIFY mobile VARCHAR(20);

ALTER TABLE students
DROP COLUMN mobile;


TRUNCATE TABLE enrollments;


DELETE FROM students
WHERE city = 'Delhi';

DELETE FROM students
WHERE student_id = 104;

DELETE FROM students;

TRUNCATE TABLE students;

DROP TABLE enrollments;

DROP DATABASE IF EXISTS college_db;