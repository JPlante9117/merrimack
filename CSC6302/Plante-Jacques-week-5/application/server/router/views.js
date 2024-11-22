import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/students', 'index.html'));
});

router.get('/rosters', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/teachers', 'index.html'));
});

router.get('/classes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/classes', 'index.html'));
});

export default router;