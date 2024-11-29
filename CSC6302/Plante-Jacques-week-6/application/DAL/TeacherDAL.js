import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class TeacherDAL {
    async read(userType, teacherId) {
        let sql = `
        SELECT *
        FROM Teacher
        WHERE teacher_id = ?`,
        connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [teacherId]);
            return results[0];
        } catch (err) {
            console.error("Teacher::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(userType, firstName, lastName, emailAddress){ 
        let sql = `INSERT INTO Teacher(
            first_name,
            last_name,
            email_address
        ) VALUES (?, ?, ?)`,
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [firstName, lastName, emailAddress]);
            return results;
        } catch (err) {
            console.error("Teacher::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getId(userType, firstName, lastName) {
        let sql = "SELECT getTeacherId(?, ?) AS id",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [firstName, lastName]);
            return results[0].id;
        } catch (err) {
            console.error("Teacher::getId Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getStudents(userType, firstName, lastName) {
        let sql = "CALL getTeacherStudents(?, ?)",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [firstName, lastName]);
            return results[0];
        } catch (err) {
            console.error("Teacher::getStudents Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getTeachers(userType) {
        let sql = "SELECT * FROM Teacher",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql);
            return results;
        } catch (err) {
            console.error("Teacher::getTeachers Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new TeacherDAL();
