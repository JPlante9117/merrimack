import TeacherDAL from '../DAL/TeacherDAL.js';
import { checkArguments, isString } from '../helpers.js';

class TeacherBLL {
    getTeacher(id, callback) {
        if (!id) {
            return callback(new Error("ID required for search"));
        }

        TeacherDAL.read(id, (err, msg) => {
            if (err) {
                console.log("Error finding teacher: ", err);
                return callback(err);
            }

            // Pass teacher through cb
            callback(null, msg);
        });
    }

    getTeacherId(firstName, lastName, callback) {
        if (!firstName || !lastName) {
            return callback(new Error("Both first and last name required for search"));
        }

        TeacherDAL.getId(firstName, lastName, (err, msg) => {
            if (err) {
                console.log("Error finding teacher: ", err);
                return callback(err);
            }

            callback(null, msg);
        })
    }

    createTeacher(firstName, lastName, emailAddress, callback) {
        let allArgumentsValid = checkArguments({
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress
        });

        if (isString(allArgumentsValid)) {
            return callback(new Error(`${allArgumentsValid} is required.`))
        }

        TeacherDAL.add(firstName, lastName, emailAddress, (err, msg) => {
            if (err) {
                console.log("Error adding teacher: ", err);
                return callback(err);
            }

            callback(null, msg);
        });
    }

    getStudents(firstName, lastName, callback) {
        let allArgumentsValid = checkArguments({
            first_name: firstName,
            last_name: lastName
        });

        if (isString(allArgumentsValid)) {
            return callback(new Error(`${allArgumentsValid} is required`))
        }

        TeacherDAL.getStudents(firstName, lastName, (err, msg) => {
            if (err) {
                console.log("Error finding students: ", err);
                return callback(err);
            }
            
            callback(null, msg)
        })
    }
}

export default new TeacherBLL();
