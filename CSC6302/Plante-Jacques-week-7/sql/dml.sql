-- Teacher Inserts
INSERT INTO Teacher (
    first_name,
    last_name,
    email_address
) VALUES
    ( 'Alexandria', 'Plante', 'planteale@merrimack.edu'),
    ('Johnathon', 'UConn', 'uconnjo@merrimack.edu'),
    ('Lou', 'Wilson', 'wilsonlou@merrimack.edu'),
    ('Andrew', 'Hill', 'hilland@merrimack.edu');
-- END WEEK 3 ADD TEACHER

-- WEEK 3 ADDSTUDENT FUNCTION
INSERT INTO Student(
    first_name,
    last_name,
    email_address,
    date_of_birth,
    student_grade
) VALUES
    ('Betty', 'Sanchez', 'sanchezbe@merrimack.edu', '1973-10-10', 9),
    ('John', 'Doe', 'doejohn@merrimack.edu', '1990-05-12', 10),
    ('Alice', 'Johnson', 'johnsonal@merrimack.edu', '1995-03-22', 11),
    ('Michael', 'Brown', 'brownmi@merrimack.edu', '2001-07-14', 12),
    ('Emily', 'Davis', 'davisem@merrimack.edu', '1998-02-01', 9),
    ('James', 'Martinez', 'martinezja@merrimack.edu', '1992-08-30', 10),
    ('Sophia', 'Garcia', 'garciaso@merrimack.edu', '1988-09-05', 11),
    ('William', 'Rodriguez', 'rodriguezwi@merrimack.edu', '1994-11-15', 12),
    ('Olivia', 'Wilson', 'wilsonol@merrimack.edu', '2000-04-18', 9),
    ('Ethan', 'Anderson', 'andersone@merrimack.edu', '1996-12-23', 10),
    ('Ava', 'Thomas', 'thomasa@merrimack.edu', '1999-06-09', 11),
    ('Daniel', 'Taylor', 'taylord@merrimack.edu', '1985-01-30', 12),
    ('Mia', 'Moore', 'mooremia@merrimack.edu', '2002-02-14', 9),
    ('Henry', 'Jackson', 'jacksonhe@merrimack.edu', '1997-03-29', 10),
    ('Charlotte', 'Hernandez', 'hernandezch@merrimack.edu', '1993-10-05', 11),
    ('Lucas', 'White', 'whitelu@merrimack.edu', '1991-07-17', 12),
    ('Zoe', 'Lopez', 'lopezzo@merrimack.edu', '2001-12-20', 9),
    ('Liam', 'Gonzalez', 'gonzalezli@merrimack.edu', '1990-08-22', 10),
    ('Grace', 'Perez', 'perezgr@merrimack.edu', '1995-05-06', 11),
    ('Benjamin', 'Hall', 'hallbe@merrimack.edu', '1989-09-11', 12),
    ('Ella', 'Young', 'youngel@merrimack.edu', '2003-04-16', 9);
-- END WEEK 3 ADDSTUDENT FUNCTION

-- Classes Inserts
-- START WEEK 3 ADD CLASSES
INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES
    ('Math', 1, 204),
    ('English', 2, 102),
    ('Science', 3, 313),
    ('History', 4, 008);
-- END WEEK 3 ADD CLASSES

-- Student Classes w/ Grades
INSERT INTO StudentClasses(
    student_id,
    class_id,
    class_grade
) VALUES
    (1, 1, 'A'),
    (2, 1, 'B'),
    (3, 1, 'C'),
    (4, 1, 'A'),
    (5, 1, 'B'),
    (1, 2, 'A'),
    (2, 2, 'C'),
    (3, 2, 'D'),
    (4, 2, 'B'),
    (5, 2, 'A'),
    (6, 3, 'B'),
    (7, 3, 'A'),
    (8, 3, 'C'),
    (9, 3, 'A'),
    (10, 3, 'B'),
    (11, 4, 'C'),
    (12, 4, 'D'),
    (13, 4, 'B'),
    (14, 4, 'A'),
    (15, 4, 'C'),
    (16, 1, 'A'),
    (17, 2, 'B'),
    (18, 3, 'C'),
    (19, 4, 'D'),
    (20, 1, 'A');