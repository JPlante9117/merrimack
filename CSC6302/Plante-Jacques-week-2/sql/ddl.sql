-- Create School DB
DROP DATABASE IF EXISTS SCHOOL;
CREATE DATABASE SCHOOL; 

-- Select Database
USE SCHOOL;

/*
    Teacher Table
    Super Keys:
        { teacher_id }
        { email_address }
        And any combinations of either minimal super key and another column, such as: 
        { teacher_id, first_name }
        { teacher_id, last_name }
        { teacher_id, email_address }
        { email_address, first_name, last_name }
        { teacher_id, email_address, first_name, last_name }
        etc...
    Candidate Keys:
        { teacher_id }
        { email_address }
    The Primary Key of teacher_id was chosen because it is a Candidate Key that will always be unique and
    is unlikely to change. email_address could possibly change therefore making it less reliable as a primary key.
*/
CREATE TABLE IF NOT EXISTS Teacher (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email_address VARCHAR(50) UNIQUE
);

/*
    Student Table
    Super Keys:
        { student_id }
        { email_address }
        And any combinations of either minimal super key and another column, such as: 
        { student_id, first_name }
        { student_id, last_name }
        { student_id, email_address }
        { student_id, date_of_birth }
        { student_id, student_grade }
        { email_address, first_name, last_name }
        { email_address, date_of_birth, first_name, last_name }
        etc...
    Candidate Keys:
        { student_id }
        { email_address }
    The Primary Key of student_id was chosen because it is a Candidate Key that will always be unique and
    is unlikely to change. email_address could possibly change therefore making it less reliable as a primary key.
*/
CREATE TABLE IF NOT EXISTS Student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email_address VARCHAR(100) UNIQUE,
    date_of_birth DATE,
    student_grade INT
);

/*
    Classes Table
    Super Keys:
        { class_id }
        And any combinations of class_id with other columns, such as:
        { class_id, subject }
        { class_id, teacher_id }
        { class_id, room_number }
        { class_id, subject, teacher_id }
        { class_id, subject, room_number }
        { class_id, teacher_id, room_number }
        { class_id, subject, room_number, teacher_id }
    Candidate Key:
        { class_id }
    The Primary Key of class_id was chosen because it is a Candidate Key that will always be unique and
    is unlikely to change.
*/
CREATE TABLE IF NOT EXISTS Classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    subject VARCHAR(100),
    teacher_id INT,
    room_number INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

-- Joins table for Students enrolled in a class
CREATE TABLE IF NOT EXISTS StudentClasses (
    student_class_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    class_id INT,
    -- Grade ENUM reflects the typical letter grades that can be received in school
    class_grade ENUM('A', 'B', 'C', 'D', 'F'),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (class_id) REFERENCES Classes(class_id)
);