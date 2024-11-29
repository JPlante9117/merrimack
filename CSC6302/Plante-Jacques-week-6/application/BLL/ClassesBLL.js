import ClassesDAL from '../DAL/ClassesDAL.js';
import TeacherBLL from './TeacherBLL.js';
import StudentBLL from './StudentBLL.js';
import { checkArguments, isString } from '../helpers.js';

export class Class {
    constructor({class_id, subject, teacher, room_number}) {
        this.id = class_id;
        this.subject = subject;
        this.teacher = teacher;
        this.room_number = room_number;
    }

    // Static method to handle async operations and create an instance
    static async create({ class_id, subject, teacher_id, room_number, userType }) {
        try {
            // Await the asynchronous operations to get student and class details
            const teacher = await TeacherBLL.getTeacher(userType, teacher_id);

            // Return a new instance of Class with the awaited data
            return new Class({
                class_id,
                subject,
                teacher,
                room_number
            });
        } catch (err) {
            throw new Error("Error creating Class instance: " + err.message);
        }
    }
}

export class StudentClass {
    constructor({student_class_id, student, thisClass, grade}) {
        this.id = student_class_id;
        this.student = student;
        this.class = thisClass;
        this.grade = grade;
    }

    // Static method to handle async operations and create an instance
    static async create({ student_class_id, student_id, class_id, grade, userType }) {
        try {
            // Await the asynchronous operations to get student and class details
            const student = await StudentBLL.getStudent(userType, student_id);
            const thisClass = await new ClassesBLL().getClass(class_id);

            // Return a new instance of StudentClass with the awaited data
            return new StudentClass({
                student_class_id,
                student,
                thisClass,
                grade
            });
        } catch (err) {
            throw new Error("Error creating StudentClass instance: " + err.message);
        }
    }
}

class ClassesBLL {
    async getClass(userType, id) {
        try {
            if (!id) {
                return new Error("ID required for search");
            }
    
            let classResp = await ClassesDAL.read(userType, id),
                thisClass = await Class.create(Object.assign(classResp, { userType }));
    
            return thisClass;
        } catch (err) {
            throw err;
        }
    }

    async createClass(userType, subject, teacherId, roomNumber) {
        try {
            let allArgumentsValid = checkArguments({
                subject,
                teacher_id: teacherId,
                room_number: roomNumber
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required.`);
            }
    
            let classResp = await ClassesDAL.add(userType, subject, teacherId, roomNumber),
                classId = classResp.insertId,
                thisClass = await this.getClass(classId)

            return thisClass;
        } catch (err) {
            throw err;
        }
    }

    async enrollStudent(studentId, classId, grade = "A") {
        try {
            if (!studentId || !classId) {
                return new Error("Student and Class IDs required");
            }
    
            let studentClassId = await ClassesDAL.enrollStudent(userType, studentId, classId, grade),
                enrollment = await StudentClass.create({
                    student_class_id: studentClassId,
                    student_id: studentId,
                    class_id: classId,
                    grade,
                    userType
                }),
                student = enrollment.student || {},
                thisClass = enrollment.class || {};
                
            return `${student.firstName} ${student.lastName} enrolled in ${thisClass.subject}`;
        } catch (err) {
            throw err;
        }
    }
}

export default new ClassesBLL();
