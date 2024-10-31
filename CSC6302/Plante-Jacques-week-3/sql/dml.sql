-- Teacher Inserts
INSERT INTO Teacher (
    first_name,
    last_name,
    email_address
) VALUES (
    'Alexandria',
    'Plante',
    'planteale@merrimack.edu'
);

INSERT INTO Teacher (
    first_name,
    last_name,
    email_address
) VALUES (
    'Johnathon',
    'UConn',
    'uconnjo@merrimack.edu'
);

INSERT INTO Teacher (
    first_name,
    last_name,
    email_address
) VALUES (
    'Lou',
    'Wilson',
    'wilsonlou@merrimack.edu'
);
-- START WEEK 3 ADD TEACHER
INSERT INTO Teacher (
    first_name,
    last_name,
    email_address
) VALUES (
    'Andrew',
    'Hill',
    'hilland@merrimack.edu'
);
-- END WEEK 3 ADD TEACHER

-- WEEK 3 ADDSTUDENT FUNCTION
SELECT addStudent('Betty', 'Sanchez', 'sanchezbe@merrimack.edu', '1973-10-10', 9);
SELECT addStudent('John', 'Doe', 'doejohn@merrimack.edu', '1990-05-12', 10);
SELECT addStudent('Alice', 'Johnson', 'johnsonal@merrimack.edu', '1995-03-22', 11);
SELECT addStudent('Michael', 'Brown', 'brownmi@merrimack.edu', '2001-07-14', 12);
SELECT addStudent('Emily', 'Davis', 'davisem@merrimack.edu', '1998-02-01', 9);
SELECT addStudent('James', 'Martinez', 'martinezja@merrimack.edu', '1992-08-30', 10);
SELECT addStudent('Sophia', 'Garcia', 'garciaso@merrimack.edu', '1988-09-05', 11);
SELECT addStudent('William', 'Rodriguez', 'rodriguezwi@merrimack.edu', '1994-11-15', 12);
SELECT addStudent('Olivia', 'Wilson', 'wilsonol@merrimack.edu', '2000-04-18', 9);
SELECT addStudent('Ethan', 'Anderson', 'andersone@merrimack.edu', '1996-12-23', 10);
SELECT addStudent('Ava', 'Thomas', 'thomasa@merrimack.edu', '1999-06-09', 11);
SELECT addStudent('Daniel', 'Taylor', 'taylord@merrimack.edu', '1985-01-30', 12);
SELECT addStudent('Mia', 'Moore', 'mooremia@merrimack.edu', '2002-02-14', 9);
SELECT addStudent('Henry', 'Jackson', 'jacksonhe@merrimack.edu', '1997-03-29', 10);
SELECT addStudent('Charlotte', 'Hernandez', 'hernandezch@merrimack.edu', '1993-10-05', 11);
SELECT addStudent('Lucas', 'White', 'whitelu@merrimack.edu', '1991-07-17', 12);
SELECT addStudent('Zoe', 'Lopez', 'lopezzo@merrimack.edu', '2001-12-20', 9);
SELECT addStudent('Liam', 'Gonzalez', 'gonzalezli@merrimack.edu', '1990-08-22', 10);
SELECT addStudent('Grace', 'Perez', 'perezgr@merrimack.edu', '1995-05-06', 11);
SELECT addStudent('Benjamin', 'Hall', 'hallbe@merrimack.edu', '1989-09-11', 12);
SELECT addStudent('Ella', 'Young', 'youngel@merrimack.edu', '2003-04-16', 9);
-- END WEEK 3 ADDSTUDENT FUNCTION

-- Classes Inserts
-- START WEEK 3 ADD CLASSES
INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'Math',
    1,
    204
);
INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'English',
    2,
    102
);
INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'Science',
    3,
    313
);
INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'History',
    4,
    008
);
-- END WEEK 3 ADD CLASSES

-- Student Classes w/ Grades
SELECT enrollStudent(1, 1, 'A');
SELECT enrollStudent(2, 1, 'B');
SELECT enrollStudent(3, 1, 'C');
SELECT enrollStudent(4, 1, 'A');
SELECT enrollStudent(5, 1, 'B');

SELECT enrollStudent(1, 2, 'A');
SELECT enrollStudent(2, 2, 'C');
SELECT enrollStudent(3, 2, 'D');
SELECT enrollStudent(4, 2, 'B');
SELECT enrollStudent(5, 2, 'A');

SELECT enrollStudent(6, 3, 'B');
SELECT enrollStudent(7, 3, 'A');
SELECT enrollStudent(8, 3, 'C');
SELECT enrollStudent(9, 3, 'A');
SELECT enrollStudent(10, 3, 'B');

SELECT enrollStudent(11, 4, 'C');
SELECT enrollStudent(12, 4, 'D');
SELECT enrollStudent(13, 4, 'B');
SELECT enrollStudent(14, 4, 'A');
SELECT enrollStudent(15, 4, 'C');

SELECT enrollStudent(16, 1, 'A');
SELECT enrollStudent(17, 2, 'B');
SELECT enrollStudent(18, 3, 'C');
SELECT enrollStudent(19, 4, 'D');
SELECT enrollStudent(20, 1, 'A');