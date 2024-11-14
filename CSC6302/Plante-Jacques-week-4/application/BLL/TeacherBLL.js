import TeacherDAL from '../DAL/TeacherDAL.js';
import { Student } from './StudentBLL.js';
import { checkArguments, isString, defaultCallback } from '../helpers.js';

export class Teacher {
    constructor({teacher_id, first_name, last_name, email_address}) {
        this.id = teacher_id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.emailAddress = email_address;
    }
}
class TeacherBLL {
    getTeacher(id, callback = defaultCallback) {
        if (!id) {
            return callback(new Error("ID required for search"));
        }

        TeacherDAL.read(id, (err, teacherResp) => {
            if (err) {
                console.log("Error finding teacher: ", err);
                return callback(err);
            }

            let teacher = new Teacher(teacherResp);

            // Pass teacher through cb
            callback(null, teacher);
        });
    }

    getTeacherId(firstName, lastName, callback = defaultCallback) {
        if (!firstName || !lastName) {
            return callback(new Error("Both first and last name required for search"));
        }

        TeacherDAL.getId(firstName, lastName, (err, id) => {
            if (err) {
                console.log("Error finding teacher: ", err);
                return callback(err);
            }

            callback(null, id);
        })
    }

    createTeacher(firstName, lastName, emailAddress, callback = defaultCallback) {
        let allArgumentsValid = checkArguments({
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress
        });

        if (isString(allArgumentsValid)) {
            return callback(new Error(`${allArgumentsValid} is required.`))
        }

        TeacherDAL.add(firstName, lastName, emailAddress, (err, teacherResp) => {
            if (err) {
                console.log("Error adding teacher: ", err);
                return callback(err);
            }

            let teacher = new Teacher(teacherResp);

            callback(null, `Teacher ${teacher.firstName} ${teacher.lastName} created!`);
        });
    }

    getStudents(firstName, lastName, callback = defaultCallback) {
        let allArgumentsValid = checkArguments({
            first_name: firstName,
            last_name: lastName
        });

        if (isString(allArgumentsValid)) {
            return callback(new Error(`${allArgumentsValid} is required`))
        }

        TeacherDAL.getStudents(firstName, lastName, (err, studentsResp = []) => {
            if (err) {
                console.log("Error finding students: ", err);
                return callback(err);
            }

            let studentsArr = [];
            studentsResp.forEach(student => {
                studentsArr.push(new Student(student))
            });
            
            callback(null, studentsArr)
        })
    }
}

export default new TeacherBLL();
