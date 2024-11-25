import mysql from 'mysql2/promise';
import { readOnlyConfig, modifyConfig } from '../server/dbConfigs.js';

class ClassesDAL {
    async read(class_id) {
        let sql = `
            SELECT *
            FROM Classes
            WHERE class_id = ?
        `,
            connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

            let [results] = await connection.execute(sql, [class_id]);
            return results[0];
        } catch (err) {
            console.error("Classes::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(subject, teacherId, roomNumber){ 
        let sql = `
            INSERT INTO Classes (
                subject,
                teacher_id,
                room_number
            ) VALUES (?, ?, ?)
        `,
            connection;

        try {
            connection = await mysql.createConnection(modifyConfig);

            let [results] = await connection.execute(sql, [subject, teacherId, roomNumber]);
            return results;
        } catch (err) {
            console.error("Classes::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async enrollStudent(studentId, classId, grade) {
        let sql = `SELECT enrollStudent(?, ?, ?) AS id`,
            connection;

        try {
            connection = await mysql.createConnection(modifyConfig);

            let [results] = await connection.execute(sql, [studentId, classId, grade]);
            return results[0].id;
        } catch (err) {
            console.error("Classes::enrollStudent Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new ClassesDAL();
