import connection from './connect.js';
import StudentBLL from './BLL/StudentBLL.js';

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

        console.log("Student: ", student);
    });
}

const studentId = 1;
getStudentById(1);


// KEEP AT END OF FILE

// connection.end(err => {
//     if (err) return console.error(err.message);

//     console.log('Connection closed.')
// })