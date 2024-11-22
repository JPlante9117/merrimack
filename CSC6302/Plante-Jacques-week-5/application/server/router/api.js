import express from "express";
import StudentBLL from "../../BLL/StudentBLL.js";
import TeacherBLL from "../../BLL/TeacherBLL.js";

const router = express.Router();

router.get("/students", async (req, res) => {
    try {
        const rows = await StudentBLL.getAllStudentsBasic();
        res.json(rows);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/students", async(req, res) => {
    try {
        const {
            first_name,
            last_name,
            email_address,
            date_of_birth,
            student_grade
        } = req.body;

        let addedStudent = await StudentBLL.createStudent(first_name, last_name, email_address, date_of_birth, student_grade);

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
        const rows = await TeacherBLL.getTeachers();
        res.json(rows);
    } catch (error) {
        console.error("Error fetching teachers:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getTeachersStudents', async (req, res) => {
    try {
        let firstName = req.query.fname,
            lastName  = req.query.lname;

        const rows = await TeacherBLL.getStudents(firstName, lastName);
        res.json(rows);
    } catch (error) {
        console.error("Error getting students: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
