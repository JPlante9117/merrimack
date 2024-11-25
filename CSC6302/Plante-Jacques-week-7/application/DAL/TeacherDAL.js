import mysql from 'mysql2/promise';
import { readOnlyConfig, modifyConfig } from '../server/dbConfigs.js';

class TeacherDAL {
    async read(teacherId) {
        let sql = `
        SELECT *
        FROM Teacher
        WHERE teacher_id = ?`,
        connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

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

    async add(firstName, lastName, emailAddress){ 
        let sql = `INSERT INTO Teacher(
            first_name,
            last_name,
            email_address
        ) VALUES (?, ?, ?)`,
            connection;

        try {
            connection = await mysql.createConnection(modifyConfig);

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

    async getId(firstName, lastName) {
        let sql = "SELECT getTeacherId(?, ?) AS id",
            connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

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

    async getStudents(firstName, lastName) {
        let sql = "CALL getTeacherStudents(?, ?)",
            connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

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

    async getTeachers() {
        let sql = "SELECT * FROM Teacher",
            connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

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
