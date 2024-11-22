import StudentDAL from '../DAL/StudentDAL.js';
import { checkArguments, isString } from '../helpers.js';

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
    async getStudent(id) {
        try {
            if (!id) {
                return new Error("ID required for search");
            }
    
            let studentResp = await StudentDAL.read(id),
                student = new Student(studentResp);
    
            return student;
        } catch (err) {
            console.log("StudentBLL::getStudent::Error: ", err);
        }
    }

    async createStudent(firstName, lastName, emailAddress, dob, gradeYear) {
        try {
            let allArgumentsValid = checkArguments({
                first_name: firstName,
                last_name: lastName,
                email_address: emailAddress,
                date_of_birth: dob,
                student_grade: gradeYear
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required.`);
            }
    
            let studentResp = await StudentDAL.add(firstName, lastName, emailAddress, dob, gradeYear),
                student = await this.getStudent(studentResp);
    
            return student;
        } catch (err) {
            throw new Error(`StudentBLL::createStudent::Error: ${err.message}`);
        }
    }

    async getAllStudentsBasic() {
        try {
            let allStudentsResp = await StudentDAL.getAllBasic(),
                students = [];

            allStudentsResp.forEach(student => {
                students.push(new Student({
                    first_name    : student.first_name,
                    last_name     : student.last_name,
                    email_address : student.email_address
                }));
            });

            return students;
        } catch (err) {
            console.log("StudentBLL::getAllStudentsBasic::Error: ", err);
        }
    }
}

export default new StudentBLL();
