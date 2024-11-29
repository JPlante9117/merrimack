import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class ClassesDAL {
    async read(userType, class_id) {
        let sql = `
            SELECT *
            FROM Classes
            WHERE class_id = ?
        `,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

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

    async add(userType, subject, teacherId, roomNumber){ 
        let sql = `
            INSERT INTO Classes (
                subject,
                teacher_id,
                room_number
            ) VALUES (?, ?, ?)
        `,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

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

    async enrollStudent(userType, studentId, classId, grade) {
        let sql = `SELECT enrollStudent(?, ?, ?) AS id`,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

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
