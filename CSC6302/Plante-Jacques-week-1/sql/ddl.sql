-- Create School DB
CREATE DATABASE IF NOT EXISTS SCHOOL;

-- Select Database
USE SCHOOL;

-- Create Student Table
CREATE TABLE IF NOT EXISTS Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email_address VARCHAR(100),
    date_of_birth DATE,
    student_grade INT,
    teacher_first_name VARCHAR(50),
    teacher_last_name VARCHAR(50),
    teacher_email VARCHAR(100),
    room_number INT,
    subject VARCHAR(100),
    class_grade CHAR(1)
);