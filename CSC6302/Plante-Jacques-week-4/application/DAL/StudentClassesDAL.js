// May not need? As I think the DAL and BLL for Classes should handle enrollment using our function
// I've instead put that logic there for now.

import connection from '../connect.js';

class StudentClasses {
    async read(studentClassId) {
        let sql = `
        SELECT *
        FROM StudentClasses
        WHERE student_class_id = ?`;
        return new Promise((resolve, reject) => {
            connection.execute(sql, [studentClassId], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    async add(studentId, classId, grade){ 
        let sql = `
        INSERT INTO StudentClasses (
            student_id,
            class_id,
            grade
        ) VALUES (?, ?, ?)`;
        return new Promise((resolve, reject) => {
            connection.execute(sql, [studentId, classId, grade], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]);
            })
        });
    }
}

export default new StudentClasses();
