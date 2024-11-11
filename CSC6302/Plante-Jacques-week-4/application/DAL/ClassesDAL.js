import connection from '../connect.js';

class ClassesDAL {
    read(class_id, callback) {
        let sql = `
        SELECT *
        FROM Classes
        WHERE class_id = ?`;
        connection.query(sql, [class_id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    add(subject, teacherId, roomNumber){ 
        let sql = `
        INSERT INTO Classes (
            subject,
            teacher_id,
            room_number
        ) VALUES (?, ?, ?)`;
        connection.query(sql, [subject, teacherId, roomNumber], (err, results) => {
            if (err) return callback(err);
            callback(null, `Class ${subject} added!`);
        })
    }
}

export default new ClassesDAL();
