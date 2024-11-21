import connection from './connect.js';
import StudentBLL from './BLL/StudentBLL.js';
import TeacherBLL from './BLL/TeacherBLL.js';
import ClassesBLL from './BLL/ClassesBLL.js';

/**
 * There is a bit of commented out code here in this file. The assignment for WEEK 4
 * requested that we only run a few functions and procedures. However, to prove that all
 * of the code in the database works, I've written a line and a log for each query that is
 * part of the BLL files. Feel free to comment/uncomment any or all of them!
 */
connection.connect(async (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the MySQL server.');
    // STUDENT BLL -- Evidence
    // Get
    // let student1 = await StudentBLL.getStudent(1);
    // console.log("Student 1 is: ", student1);

    // Calls the function addStudent
    let newStudent = await StudentBLL.createStudent("Smilio", "Walter", "waltersmi@merrimack.edu", "2000-05-12", 8);
    console.log("The newest student is: ", newStudent);

    // TEACHER BLL -- Evidence
    // create
    // let newTeacher = await TeacherBLL.createTeacher("Bilbo", "Baggins", "bagginsb@merrimack.edu");
    // console.log("The new teacher:", newTeacher);
    // get
    // let teacher4 = await TeacherBLL.getTeacher(4);
    // console.log("Teacher #4 is: ", teacher4);
    // get Id
    // let louId = await TeacherBLL.getTeacherId("Lou", "Wilson");
    // console.log("Lou's id is: ", louId);

    // WEEK 4 TASK -- Calls the procedure getTeacherStudents
    let lousStudents = await TeacherBLL.getStudents("Lou", "Wilson");
    console.log("Lou's students are: ", lousStudents);

    // CLASSES BLL -- Evidence
    // create
    // let newClass = await ClassesBLL.createClass("Advanced Worldbuilding", 3, 503);
    // console.log("the new class is: ", newClass);
    // get
    // let class2 = await ClassesBLL.getClass(2);
    // console.log("Class #2 is: ", class2);

    // WEEK 4 TASK -- Calls the function enrollStudent
    let newEnrollment = await ClassesBLL.enrollStudent(1, 2, "B");
    console.log(newEnrollment);

    connection.end();
});
