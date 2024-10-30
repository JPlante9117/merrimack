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

-- Student Inserts
INSERT INTO Student(
    first_name,
    last_name,
    email_address,
    date_of_birth,
    student_grade
) VALUES (
    'Jacques',
    'Plante',
    'plantejac@merrimack.edu',
    '1995-11-02',
    17
);

INSERT INTO Student(
    first_name,
    last_name,
    email_address,
    date_of_birth,
    student_grade
) VALUES (
    'April',
    'Showers',
    'showersapr@merrimack.edu',
    '1980-01-01',
    11
);

INSERT INTO Student(
    first_name,
    last_name,
    email_address,
    date_of_birth,
    student_grade
) VALUES (
    'Patrick',
    'Smith',
    'smithpa@merrimack.edu',
    '1993-09-19',
    9
);

-- Classes Inserts
INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'Comedy & Improvisation',
    3,
    425
);

INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'English',
    1,
    101
);

INSERT INTO Classes (
    subject,
    teacher_id,
    room_number
) VALUES (
    'Team Management: How to Win a Championship',
    2,
    319
);

-- Student Classes w/ Grades
INSERT INTO StudentClasses (
    student_id,
    class_id,
    class_grade
) VALUES (
    1,
    1,
    'A'
);

INSERT INTO StudentClasses (
    student_id,
    class_id,
    class_grade
) VALUES (
    1,
    2,
    'C'
);

INSERT INTO StudentClasses (
    student_id,
    class_id,
    class_grade
) VALUES (
    2,
    3,
    'B'
);

INSERT INTO StudentClasses (
    student_id,
    class_id,
    class_grade
) VALUES (
    3,
    2,
    'A'
);