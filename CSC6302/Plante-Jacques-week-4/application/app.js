import connection from './connect.js';
import StudentBLL from './BLL/StudentBLL.js';
import TeacherBLL from './BLL/TeacherBLL.js';

connection.connect((err) => {
    if (err) return console.error(err.message);

    console.log('Connected to the MySQL server.');
});

const getStudentById = (id) => {
    StudentBLL.getStudent(id, (err, student) => {
        if (err) {
            console.log("Error fetching student: ", err);
            return;
        }

        if (!student) {
            console.log("Student not found.");
            return;
        }

        console.log("Student found: ", student);
    });
}

// Calls Function
const addStudent = (firstName, lastName, emailAddres, dob, gradeYear) => {
    StudentBLL.createStudent(firstName, lastName, emailAddres, dob, gradeYear, (err, student) => {
        if (err) {
            console.log("Error creating student: ", err);
            return;
        }

        console.log(`Student ${firstName} ${lastName} created!`);
    });
}

// Calls the Stored Procedure getTeacherStudents
const getStudents = (firstName, lastName) => {
    TeacherBLL.getStudents(firstName, lastName, (err, students) => {
        if (err) {
            console.log(`Error getting students for ${firstName} ${lastName}: `, err);
            return;
        }

        console.log(`${firstName} ${lastName}'s students: `, students);
    });
}

addStudent("Tony", "Hawk", "hawkt@merrimack.edu", "1968-05-12", 10);
getStudents("Lou", "Wilson");

// KEEP AT END OF FILE

connection.end(err => {
    if (err) return console.error(err.message);

    console.log('Connection closed.')
})