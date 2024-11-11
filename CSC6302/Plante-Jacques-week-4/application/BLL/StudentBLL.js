import StudentDAL from '../DAL/StudentDAL.js';
import { checkArguments } from '../helpers.js';

class StudentBLL {
    getStudent(id, callback) {
        if (!id) {
            return callback(new Error("ID required for search"));
        }

        StudentDAL.read(id, (err, msg) => {
            if (err) {
                console.log("Error finding student: ", err);
                return callback(err);
            }

            callback(null, msg);
        });
    }

    createStudent(firstName, lastName, emailAddress, dob, gradeYear, callback) {
        let allArgumentsValid = checkArguments({
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress,
            date_of_birth: dob,
            student_grade: gradeYear
        });

        if (typeof allArgumentsValid == 'string') {
            return callback(new Error(`${allArgumentsValid} is required.`));
        }

        StudentDAL.add(firstName, lastName, emailAddress, dob, gradeYear, (err, msg) => {
            if (err) {
                console.log("Error adding student: ", err);
                return callback(err);
            }

            callback(null, msg);
        });
    }
}

export default new StudentBLL();
