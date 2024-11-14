import connection from './connect.js';
import StudentBLL from './BLL/StudentBLL.js';
import TeacherBLL from './BLL/TeacherBLL.js';
import ClassesBLL from './BLL/ClassesBLL.js';
import { loggingCallback } from './helpers.js';

connection.connect((err) => {
    if (err) return console.error(err.message);

    console.log('Connected to the MySQL server.');
});

// Calls the function addStudent
// StudentBLL.createStudent("Smilio", "Walter", "waltersmi@merrimack.edu", "2000-05-12", 8);
StudentBLL.createStudent("Smilio", "Walter", "testme@merrimack.edu", "2000-05-12", 8, loggingCallback);
// Calls the procedure getTeacherStudents
TeacherBLL.getStudents("Lou", "Wilson", loggingCallback);
// Enroll Student
ClassesBLL.enrollStudent(1, 2, "B", (err, payload) => {
    loggingCallback(err, payload);
});

