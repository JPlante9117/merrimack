// May not need? As I think the DAL and BLL for Classes should handle enrollment using our function
// I've instead put that logic there for now.

import connection from '../connect.js';

class StudentClasses {
    read(studentClassId, callback) {
        let sql = `
        SELECT *
        FROM StudentClasses
        WHERE student_class_id = ?`;
        connection.query(sql, [studentClassId], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    add(studentId, classId, grade){ 
        let sql = `
        INSERT INTO StudentClasses (
            student_id,
            class_id,
            grade
        ) VALUES (?, ?, ?)`;
        connection.query(sql, [studentId, classId, grade], (err, results) => {
            if (err) return callback(err);
            callback(null, `Student Enrolled!`);
        })
    }
}

export default new StudentClasses();
