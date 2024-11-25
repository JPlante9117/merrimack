import mysql from 'mysql2/promise';
import { readOnlyConfig, modifyConfig } from '../server/dbConfigs.js';

class StudentDAL {
    async read(studentId) {
        const sql = "SELECT * FROM Student WHERE student_id = ?";
        let connection;
        try {
            connection = await mysql.createConnection(readOnlyConfig);
    
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

    async getAll() {
        let sql = "SELECT * FROM Student",
            connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

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

    async add(firstName, lastName, emailAddress, dob, gradeYear){ 
        let sql = "SELECT addStudent(?, ?, ?, ?, ?) AS id",
            connection;

        try {
            connection = await mysql.createConnection(modifyConfig);

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

    async getEnrolledClasses(studentId) {
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
            connection;

        try {
            connection = await mysql.createConnection(readOnlyConfig);

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
