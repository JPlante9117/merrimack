import connection from '../connect.js';

class StudentDAL {
    read(studentId, callback) {
        let sql = "SELECT * FROM Student WHERE student_id = ?";
        connection.query(sql, [studentId], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    add(firstName, lastName, emailAddress, dob, gradeYear, callback){ 
        let sql = "SELECT addStudent(?, ?, ?, ?, ?) AS id";
        connection.query(sql, [firstName, lastName, emailAddress, dob, gradeYear], (err, results) => {
            if (err) return callback(err);
            
            callback(null, results[0].id);
        })
    }
}

export default new StudentDAL();
