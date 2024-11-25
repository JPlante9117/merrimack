import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/students', (req, res) => {
    res.render('students');
});

router.get('/rosters', (req, res) => {
    res.render('rosters');
});

router.get('/classes', (req, res) => {
    res.render('classes');
});

export default router;