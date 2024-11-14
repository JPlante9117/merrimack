import StudentDAL from '../DAL/StudentDAL.js';
import { checkArguments, isString, defaultCallback } from '../helpers.js';

export class Student {
    constructor({student_id, first_name, last_name, email_address, date_of_birth, student_grade}) {
        this.id = student_id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.emailAddress = email_address;
        this.dob = new Date(date_of_birth);
        this.grade = student_grade;
    }
}

class StudentBLL {
    getStudent(id, callback = defaultCallback) {
        if (!id) {
            return callback(new Error("ID required for search"));
        }

        StudentDAL.read(id, (err, studentResp) => {
            if (err) {
                console.log("Error finding student: ", err);
                return callback(err);
            }

            let student = new Student(studentResp);

            callback(null, student);
        });
    }

    createStudent(firstName, lastName, emailAddress, dob, gradeYear, callback = defaultCallback) {
        let allArgumentsValid = checkArguments({
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress,
            date_of_birth: dob,
            student_grade: gradeYear
        });

        if (isString(allArgumentsValid)) {
            return callback(new Error(`${allArgumentsValid} is required.`));
        }

        StudentDAL.add(firstName, lastName, emailAddress, dob, gradeYear, (err, id) => {
            if (err) {
                console.log("Error adding student: ", err);
                return callback(err);
            }

            this.getStudent(id, (err, student) => {
                callback(null, `${student.firstName} ${student.lastName} created!`);
            });
        });
    }
}

export default new StudentBLL();
