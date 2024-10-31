-- Teacher Rosters
SELECT 
    t.first_name AS teacher_first_name,
    t.last_name AS teacher_last_name,
    s.student_id,
    s.first_name AS student_first_name,
    s.last_name AS student_last_name
FROM 
    Teacher t
JOIN 
    Classes c ON c.teacher_id = t.teacher_id
JOIN
    StudentClasses sc ON sc.class_id = c.class_id
JOIN
    Student s ON s.student_id = sc.student_id
ORDER BY
    t.first_name;

-- Select All Student 1's Grades
SELECT
    s.student_id,
    s.first_name AS student_first_name,
    s.last_name AS student_last_name,
    t.last_name AS teacher,
    c.subject,
    sc.class_grade as grade
FROM
    Student s
JOIN
    StudentClasses sc ON sc.student_id = s.student_id
JOIN
    Classes c ON c.class_id = sc.class_id
JOIN
    Teacher t ON t.teacher_id = c.teacher_id
WHERE
    s.student_id = 1;

-- Select Teachers, the class they teach, and the room it is in
SELECT
    t.first_name AS teacher_first_name,
    t.last_name AS teacher_last_name,
    c.room_number,
    c.subject
FROM
    Teacher t
JOIN
    Classes c ON c.teacher_id = t.teacher_id;

-- WEEK 3 QUERY
SELECT CONCAT(s.last_name,', ', s.first_name) AS student_name,
    c.subject AS class_name,
    CONCAT(t.last_name, ', ', t.first_name) AS teacher_name,
    sc.class_grade AS grade
FROM
    Student s
JOIN
    StudentClasses sc ON sc.student_id = s.student_id
JOIN
    Classes c ON c.class_id = sc.class_id
JOIN
    Teacher t ON t.teacher_id = c.teacher_id
    -- Order by last name first
ORDER BY s.last_name,
    -- Then by first name,
    s.first_name,
    -- Then by Grade
    -- Show the order of how grades should be ordered
    FIELD(sc.class_grade, 'A', 'B', 'C', 'D', 'F');