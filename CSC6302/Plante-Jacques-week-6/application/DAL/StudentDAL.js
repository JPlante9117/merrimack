import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class StudentDAL {
    async read(userType, studentId) {
        const sql = "SELECT * FROM Student WHERE student_id = ?";
        let connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);
    
            const [results] = await connection.execute(sql, [studentId]);
            return results;
        } catch (err) {
            console.error("Student::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getAll(userType) {
        let sql = "SELECT * FROM Student",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            const [results] = await connection.execute(sql)
            return results;
        } catch (err) {
            console.error("Student::getAll Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(userType, firstName, lastName, emailAddress, dob, gradeYear){ 
        let sql = "SELECT addStudent(?, ?, ?, ?, ?) AS id",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            const [results] = await connection.execute(sql, [firstName, lastName, emailAddress, dob, gradeYear]);
            return results[0].id;
        } catch (err) {
            console.error("Student::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getEnrolledClasses(userType, studentId) {
        let sql = `
            SELECT 
                c.subject, 
                c.room_number, 
                sc.class_grade, 
                CONCAT(t.first_name, ' ', t.last_name) AS teacher_name
            FROM Student s
            JOIN StudentClasses sc ON s.student_id = sc.student_id
            JOIN Classes c ON sc.class_id = c.class_id
            LEFT JOIN Teacher t ON c.teacher_id = t.teacher_id
            WHERE s.student_id = ?
        `,
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [studentId]);
            return results;
        } catch (err) {
            console.error("Student::getEnrolledClasses Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new StudentDAL();
