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

    async getAll() {
        let sql = "SELECT * FROM Student";
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

    async getEnrolledClasses(studentId) {
        let sql = `
            SELECT 
                c.subject, 
                c.room_number, 
                sc.class_grade, 
                CONCAT(t.first_name, ' ', t.last_name) AS teacher_name
            FROM Student s
            JOIN StudentClasses sc ON s.student_id = sc.student_id
            JOIN Classes c ON sc.class_id = c.class_id
            LEFT JOIN Teacher t ON c.teacher_id = t.teacher_id
            WHERE s.student_id = ?
        `
        return new Promise((resolve, reject) => {
            connection.query(sql, [studentId], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}

export default new StudentDAL();
