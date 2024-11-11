import ClassesDAL from '../DAL/ClassesDAL.js';
import StudentClassesDAL from '../DAL/StudentClassesDAL.js';
import { checkArguments } from '../helpers.js';

class ClassesBLL {
    getClass(id, callback) {
        if (!id) {
            return callback(new Error("ID required for search"));
        }

        ClassesDAL.read(id, (err, msg) => {
            if (err) {
                console.log("Error finding class: ", err);
                return callback(err);
            }

            // Pass student through cb
            callback(null, msg);
        });
    }

    createClass(subject, teacherId, roomNumber, callback) {
        let allArgumentsValid = checkArguments({
            subject,
            teacher_id: teacherId,
            room_number: roomNumber
        });

        if (!allArgumentsValid) {
            return callback(new Error(`${allArgumentsValid} is required.`))
        }

        ClassesDAL.add(subject, teacherId, roomNumber, (err, msg) => {
            if (err) {
                console.log("Error creating class: ", err);
                return callback(err);
            }

            console.log("Class created: ", msg);
            callback(null, msg);
        });
    }

    enrollStudent(studentId, classId, grade = "") {
        if (!studentId || !classId) {
            return callback(new Error("Student and Class IDs required"));
        }

        ClassesDAL.enrollStudent(studentId, classId, (err, msg) => {
            if (err) {
                console.log("Error enrolling student in class: ", err);
            }

            console.log("Student enrolled: ", msg);
            callback(null, msg);
        });
    }
}

export default new ClassesBLL();
