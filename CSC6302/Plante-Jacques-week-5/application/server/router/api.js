import express from "express";
import StudentBLL from "../../BLL/StudentBLL.js";

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

export default router;
