import connection from './connect.js';
import StudentBLL from './BLL/StudentBLL.js';
import TeacherBLL from './BLL/TeacherBLL.js';

connection.connect((err) => {
    if (err) return console.error(err.message);

    console.log('Connected to the MySQL server.');
});

StudentBLL.createStudent("Tony", "Hawk", "hawkt@merrimack.edu", "1968-05-12", 10, (err, student, addtlInfo) => {
    let firstName = addtlInfo.firstName,
        lastName = addtlInfo.lastName;

    if (err) {
        console.log("Error creating student: ", err);
        return;
    }

    console.log(`Student ${firstName} ${lastName} created!`);
});
TeacherBLL.getStudents("Lou", "Wilson", (err, students, addtlInfo) => {
    let firstName = addtlInfo.firstName,
        lastName = addtlInfo.lastName;

    if (err) {
        console.log(`Error getting students for ${firstName} ${lastName}: `, err);
        return;
    }

    console.log(`${firstName} ${lastName}'s students: `, students);
});

// KEEP AT END OF FILE

connection.end(err => {
    if (err) return console.error(err.message);

    console.log('Connection closed.')
})