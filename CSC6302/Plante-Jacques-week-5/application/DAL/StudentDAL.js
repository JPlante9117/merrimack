import connection from '../connect.js';

class StudentDAL {
    async read(studentId) {
        let sql = "SELECT * FROM Student WHERE student_id = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [studentId], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        }); 
    }

    async getAllBasic() {
        let sql = "SELECT first_name, last_name, email_address FROM Student";
        return new Promise((resolve, reject) => {
            connection.query(sql, [], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            })
        })
    }

    async add(firstName, lastName, emailAddress, dob, gradeYear){ 
        let sql = "SELECT addStudent(?, ?, ?, ?, ?) AS id";
        return new Promise((resolve, reject) => {
            connection.query(sql, [firstName, lastName, emailAddress, dob, gradeYear], (err, results) => {
                if (err) return reject(err);
                resolve(results[0].id);
            })
        });
    }
}

export default new StudentDAL();
