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
    async getTeacher(userType, id) {
        try {
            if (!id) {
                return new Error("ID required for search");
            }
    
            let teacherResp = await TeacherDAL.read(userType, id),
                teacher = new Teacher(teacherResp);
    
            return teacher;
        } catch (err) {
            throw new Error(`TeacherBLL::getTeacher::Error: ${err}`);
        }
    }

    async getTeacherId(userType, firstName, lastName) {
        try {
            if (!firstName || !lastName) {
                return new Error("Both first and last name required for search");
            }
    
            let id = await TeacherDAL.getId(userType, firstName, lastName);
    
            return id;
        } catch (err) {
            throw new Error(`TeacherBLL::getTeacherId::Error: ${err}`);
        }
    }

    async createTeacher(userType, firstName, lastName, emailAddress) {
        try {
            let allArgumentsValid = checkArguments({
                first_name: firstName,
                last_name: lastName,
                email_address: emailAddress
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required.`);
            }
    
            let teacherResp = await TeacherDAL.add(userType, firstName, lastName, emailAddress),
                teacherId = teacherResp.insertId,
                teacher = await this.getTeacher(teacherId);
    
            return teacher;
        } catch (err) {
            throw new Error(`TeacherBLL::createTeacher::Error: ${err}`);
        }
    }

    async getStudents(userType, firstName, lastName) {
        try {
            let allArgumentsValid = checkArguments({
                first_name: firstName,
                last_name: lastName
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required`);
            }
    
            let studentsResp = await TeacherDAL.getStudents(userType, firstName, lastName),
                studentsArr = [];
    
            studentsResp.forEach(payload => {
                payload = Object.assign(payload, { userType });

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

    async getTeachers(userType) {
        try {
            let teachersResp = await TeacherDAL.getTeachers(userType),
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
