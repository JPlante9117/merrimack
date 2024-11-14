import connection from '../connect.js';

class StudentDAL {
    async read(studentId) {
        let sql = "SELECT * FROM Student WHERE student_id = ?";
        return new Promise((resolve, reject) => {
            connection.execute(sql, [studentId], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        }); 
    }

    async add(firstName, lastName, emailAddress, dob, gradeYear){ 
        let sql = "SELECT addStudent(?, ?, ?, ?, ?) AS id";
        return new Promise((resolve, reject) => {
            connection.execute(sql, [firstName, lastName, emailAddress, dob, gradeYear], (err, results) => {
                if (err) return reject(err);
                resolve(results[0].id);
            })
        });
    }
}

export default new StudentDAL();
