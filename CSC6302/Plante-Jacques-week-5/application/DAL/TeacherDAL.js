import connection from '../connect.js';

class TeacherDAL {
    async read(teacherId) {
        let sql = `
        SELECT *
        FROM Teacher
        WHERE teacher_id = ?`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [teacherId], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    async add(firstName, lastName, emailAddress){ 
        let sql = `INSERT INTO Teacher(
            first_name,
            last_name,
            email_address
        ) VALUES (?, ?, ?)`;
        return new Promise((resolve, reject) => {
            connection.query(sql, [firstName, lastName, emailAddress], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    async getId(firstName, lastName) {
        let sql = "SELECT getTeacherId(?, ?) AS id";
        return new Promise((resolve, reject) => {
            connection.query(sql, [firstName, lastName], (err, results) => {
                if (err) return reject(err);
                resolve(results[0].id);
            })
        })
    }

    async getStudents(firstName, lastName) {
        let sql = "CALL getTeacherStudents(?, ?)";
        return new Promise((resolve, reject) => {
            connection.query(sql, [firstName, lastName], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            })
        });
    }

    async getTeachers() {
        let sql = "SELECT * FROM Teacher";
        return new Promise((resolve, reject) => {
            connection.query(sql, [], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}

export default new TeacherDAL();
