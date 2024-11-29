import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class StudentClasses {
    async read(userType, studentClassId) {
        let sql = `
        SELECT *
        FROM StudentClasses
        WHERE student_class_id = ?`,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [studentClassId]);
            return results[0];
        } catch (err) {
            console.error("StudentClasses::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(userType, studentId, classId, grade){ 
        let sql = `
        INSERT INTO StudentClasses (
            student_id,
            class_id,
            grade
        ) VALUES (?, ?, ?)`,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [studentId, classId, grade]);
            return results[0];
        } catch (err) {
            console.error("StudentClasses::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new StudentClasses();
