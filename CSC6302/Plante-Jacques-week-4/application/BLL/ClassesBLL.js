import ClassesDAL from '../DAL/ClassesDAL.js';
import TeacherBLL from './TeacherBLL.js';
import StudentBLL from './StudentBLL.js';
import { checkArguments, isString, defaultCallback } from '../helpers.js';

export class Class {
    constructor({class_id, subject, teacher_id, room_number}) {
        this.id = class_id;
        this.subject = subject;
        this.teacher = TeacherBLL.getTeacher(teacher_id);
        this.room_number = room_number;
    }
}

export class StudentClass {
    constructor({student_id, class_id, grade}) {
        this.student = StudentBLL.getStudent(student_id);
        this.classId = new ClassesBLL().getClass(class_id);
        this.grade = grade;
    }
}

class ClassesBLL {
    getClass(id, callback = defaultCallback) {
        if (!id) {
            return callback(new Error("ID required for search"));
        }

        ClassesDAL.read(id, (err, classResp) => {
            if (err) {
                console.log("Error finding class: ", err);
                return callback(err);
            }

            let thisClass = new Class(classResp);

            // Pass class through cb
            callback(null, thisClass);
        });
    }

    createClass(subject, teacherId, roomNumber, callback = defaultCallback) {
        let allArgumentsValid = checkArguments({
            subject,
            teacher_id: teacherId,
            room_number: roomNumber
        });

        if (isString(allArgumentsValid)) {
            return callback(new Error(`${allArgumentsValid} is required.`))
        }

        ClassesDAL.add(subject, teacherId, roomNumber, (err, classResp) => {
            if (err) {
                console.log("Error creating class: ", err);
                return callback(err);
            }

            let thisClass = new Class(classResp);

            callback(null, thisClass);
        });
    }

    enrollStudent(studentId, classId, grade = "A", callback = defaultCallback) {
        if (!studentId || !classId) {
            return callback(new Error("Student and Class IDs required"));
        }

        ClassesDAL.enrollStudent(studentId, classId, grade, (err, studentClassResp) => {
            if (err) {
                console.log("Error enrolling student in class: ", err);
                return callback(err);
            }

            StudentBLL.getStudent(studentId, (err, student) => {
                this.getClass(classId, (err, thisClass) => {
                    callback(null, `${student.firstName} ${student.lastName} enrolled in ${thisClass.subject}`);
                });
            });

        });
    }
}

export default new ClassesBLL();
