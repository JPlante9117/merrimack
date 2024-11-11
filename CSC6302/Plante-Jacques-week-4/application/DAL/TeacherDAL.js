import connection from '../connect.js';

class TeacherDAL {
    read(teacherId, callback) {
        let sql = `
        SELECT *
        FROM Teacher
        WHERE teacher_id = ?`;
        connection.query(sql, [teacherId], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    add(firstName, lastName, emailAddress){ 
        let sql = `INSERT INTO Teacher(
            first_name,
            last_name,
            email_address
        ) VALUES (?, ?, ?)`;
        connection.query(sql, [firstName, lastName, emailAddress], (err, results) => {
            if (err) return callback(err);
            callback(null, `Teacher ${firstName} ${lastName} added!`);
        })
    }

    getId(firstName, lastName, callback) {
        let sql = "SELECT getTeacherId(?, ?)";
        connection.query(sql, [firstName, lastName], (err, results) => {
            if (err) return callback(err);
            callback(null, `Teacher ID: ${results[0]}`);
        })
    }

    getStudents(firstName, lastName, callback) {
        let sql = "CALL getTeacherStudents(?, ?)";
        connection.query(sql, [firstName, lastName], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        })
    }
}

export default new TeacherDAL();
