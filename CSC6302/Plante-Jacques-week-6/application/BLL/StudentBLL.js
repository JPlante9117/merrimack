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
    async getStudent(userType, id) {
        try {
            if (!id) {
                throw new Error("ID required for search");
            }
    
            let studentResp = await StudentDAL.read(userType, id),
                student = new Student(studentResp);
    
            return student;
        } catch (err) {
            throw err;
        }
    }

    async createStudent(userType, firstName, lastName, emailAddress, dob, gradeYear) {
        try {
            let allArgumentsValid = checkArguments({
                first_name: firstName,
                last_name: lastName,
                email_address: emailAddress,
                date_of_birth: dob,
                student_grade: gradeYear
            });
    
            if (isString(allArgumentsValid)) {
                throw new Error(`${allArgumentsValid} is required.`);
            }
    
            let studentResp = await StudentDAL.add(userType, firstName, lastName, emailAddress, dob, gradeYear);
            let student = await this.getStudent(userType, studentResp);
    
            return student;
        } catch (err) {
            throw err;
        }
    }

    async getAllStudents(userType) {
        try {
            let allStudentsResp = await StudentDAL.getAll(userType),
                students = [];

            allStudentsResp.forEach(student => {
                students.push(new Student(student));
            });

            return students;
        } catch (err) {
            throw err;
        }
    }

    async getClasses(userType, id) {
        try {
            let classesResp = await StudentDAL.getEnrolledClasses(userType, id);
            return classesResp;
        } catch (err) {
            throw err;
        }
    }
}

export default new StudentBLL();
