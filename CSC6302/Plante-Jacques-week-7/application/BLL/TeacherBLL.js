import TeacherDAL from '../DAL/TeacherDAL.js';
import { Student } from './StudentBLL.js';
import { Class } from './ClassesBLL.js';
import { checkArguments, isString } from '../helpers.js';

export class Teacher {
    constructor({teacher_id, first_name, last_name, email_address}) {
        this.id = teacher_id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.emailAddress = email_address;
    }
}
class TeacherBLL {
    async getTeacher(id) {
        try {
            if (!id) {
                return new Error("ID required for search");
            }
    
            let teacherResp = await TeacherDAL.read(id),
                teacher = new Teacher(teacherResp);
    
            return teacher;
        } catch (err) {
            throw new Error(`TeacherBLL::getTeacher::Error: ${err}`);
        }
    }

    async getTeacherId(firstName, lastName) {
        try {
            if (!firstName || !lastName) {
                return new Error("Both first and last name required for search");
            }
    
            let id = await TeacherDAL.getId(firstName, lastName);
    
            return id;
        } catch (err) {
            throw new Error(`TeacherBLL::getTeacherId::Error: ${err}`);
        }
    }

    async createTeacher(firstName, lastName, emailAddress) {
        try {
            let allArgumentsValid = checkArguments({
                first_name: firstName,
                last_name: lastName,
                email_address: emailAddress
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required.`);
            }
    
            let teacherResp = await TeacherDAL.add(firstName, lastName, emailAddress),
                teacherId = teacherResp.insertId,
                teacher = await this.getTeacher(teacherId);
    
            return teacher;
        } catch (err) {
            throw new Error(`TeacherBLL::createTeacher::Error: ${err}`);
        }
    }

    async getStudents(firstName, lastName) {
        try {
            let allArgumentsValid = checkArguments({
                first_name: firstName,
                last_name: lastName
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required`);
            }
    
            let studentsResp = await TeacherDAL.getStudents(firstName, lastName),
                studentsArr = [];
    
            studentsResp.forEach(payload => {
                let student = new Student(payload),
                    studentClass= new Class(payload);

                student.subject = studentClass.subject;
                student.roomNumber = studentClass.room_number;
                studentsArr.push(student)
            });
    
            return studentsArr;
        } catch (err) {
            throw new Error(`TeacherBLL::getStudents::Error: ${err}`);
        } 
    }

    async getTeachers() {
        try {
            let teachersResp = await TeacherDAL.getTeachers(),
                teachers = []

            for (let teacher of teachersResp) {
                teachers.push(new Teacher(teacher));
            }

            return teachers;
        } catch (err) {
            throw new Error(`TeacherBLL::getTeachers::Error: ${err}`);
        }
    }
}

export default new TeacherBLL();
