import connection from '../connect.js';

class ClassesDAL {
    async read(class_id) {
        let sql = `
        SELECT *
        FROM Classes
        WHERE class_id = ?`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [class_id], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    async add(subject, teacherId, roomNumber){ 
        let sql = `
        INSERT INTO Classes (
            subject,
            teacher_id,
            room_number
        ) VALUES (?, ?, ?)`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [subject, teacherId, roomNumber], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    async enrollStudent(studentId, classId, grade, callback) {
        let sql = `SELECT enrollStudent(?, ?, ?) AS id`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [studentId, classId, grade], (err, results) => {
                if (err) return reject(err);
                resolve(results[0].id);
            });
        });
    }
}

export default new ClassesDAL();
