import express from "express";
import StudentBLL from "../../BLL/StudentBLL.js";
import TeacherBLL from "../../BLL/TeacherBLL.js";
import ClassesBLL from "../../BLL/ClassesBLL.js";

const router = express.Router();

router.get("/students", async (req, res) => {
    try {
        let userType = req.session.userType;
        const rows = await StudentBLL.getAllStudents(userType);
        res.json(rows);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/students", async(req, res) => {
    try {
        let userType = req.session.userType;
        const {
            first_name,
            last_name,
            email_address,
            date_of_birth,
            student_grade
        } = req.body;

        let addedStudent = await StudentBLL.createStudent(userType, first_name, last_name, email_address, date_of_birth, student_grade);

        res.json({
            "message" : "Student Added Successfully",
            "payload" : addedStudent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add student' });
    }
});

router.get('/teachers', async (req, res) => {
    try {
        let userType = req.session.userType;
        const rows = await TeacherBLL.getTeachers(userType);
        res.json(rows);
    } catch (error) {
        console.error("Error fetching teachers:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getTeachersStudents', async (req, res) => {
    try {
        let userType = req.session.userType,
            firstName = req.query.fname,
            lastName  = req.query.lname;

        const rows = await TeacherBLL.getStudents(userType, firstName, lastName);
        res.json(rows);
    } catch (error) {
        console.error("Error getting students: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/enrollment', async (req, res) => {
    try {
        let userType = req.session.userType;
        let studentId = req.query.studentId;

        const rows = await StudentBLL.getClasses(userType, studentId);
        res.json(rows);
    } catch (error) {
        console.log("Error getting classes: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post('/switchUser', async (req, res) => {
    try {
        let { userType } = req.body;
        req.session.userType = userType;
        res.json({success: true});
    } catch (err) {
        console.error("Error swapping users: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('login', (req, res) => {
    res.json({ success: true });
})

export default router;
