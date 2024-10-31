USE SCHOOL;

DELIMITER //

CREATE FUNCTION addStudent(
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email_address VARCHAR(100),
    date_of_birth DATE,
    student_grade INT
)
RETURNS INT
DETERMINISTIC
BEGIN
    INSERT INTO Student(
        first_name,
        last_name,
        email_address,
        date_of_birth,
        student_grade
    ) VALUES (
        first_name,
        last_name,
        email_address,
        date_of_birth,
        student_grade
    );

    RETURN 1;
END//

-- Adding this for my ease of enrolling students for this week's assignment
CREATE FUNCTION enrollStudent(
    student_id INT,
    class_id INT,
    grade ENUM('A', 'B', 'C', 'D', 'F')
)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE found_class_id INT;
    DECLARE found_student_id INT;

    -- Search for student_id
    SELECT s.student_id INTO found_student_id
    FROM Student s
    WHERE s.student_id = student_id;

    -- Search for class_id
    SELECT c.class_id INTO found_class_id
    FROM Classes c
    WHERE c.class_id = class_id;

    -- Insert if the Class and Student Exist
    IF found_class_id IS NOT NULL AND found_student_id IS NOT NULL THEN
        INSERT INTO StudentClasses(
            student_id,
            class_id,
            class_grade
        ) VALUES (
            student_id,
            class_id,
            grade
        );
        RETURN 1;
    ELSE
        -- One or both not found, do not attempt insert
        RETURN 0; 
    END IF;
END//


CREATE FUNCTION getTeacherId(first_name VARCHAR(50), last_name VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE found_id INT;

    SELECT t.teacher_id INTO found_id
    FROM Teacher t
    WHERE t.first_name = first_name
        AND t.last_name = last_name
    LIMIT 1;

    RETURN found_id;
END//

CREATE PROCEDURE getAllStudents()
READS SQL DATA
BEGIN
    SELECT *
    FROM Student;
END//

CREATE PROCEDURE getTeacherStudents(first_name VARCHAR(50), last_name VARCHAR(50))
READS SQL DATA
BEGIN
    DECLARE teacher_id INT;
    -- call to our above function declaration
    SET teacher_id = getTeacherId(first_name, last_name);

    SELECT s.*
    FROM Student s
    JOIN StudentClasses sc ON s.student_id = sc.student_id
    JOIN Classes c ON sc.class_id = c.class_id
    JOIN Teacher t ON c.teacher_id = t.teacher_id
    WHERE t.teacher_id = teacher_id;
END//

DELIMITER ;