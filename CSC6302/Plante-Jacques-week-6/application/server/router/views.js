import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const router = express.Router();

router.get('/students', (req, res) => {
    let userType = req?.session?.userType || '';
    console.log(userType)
    if (!userType) {
        res.redirect('/login');
    } else {
        res.render('students', {
            js : 'students',
            title : 'Students',
            currentPage: 'students',
            userType
        });
    }
});

router.get('/rosters', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.redirect('/login');
    } else {
        res.render('rosters', {
            js : 'rosters',
            title : 'Student Rosters',
            currentPage: 'rosters',
            userType
        });
    }
});

router.get('/classes', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.redirect('/login');
    } else {
        res.render('classes', {
            js : 'classes',
            title : 'Student Classes',
            currentPage: 'classes',
            userType
        });
    }
});

router.get('/login', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.render('login', {
            js : null,
            title : 'Login',
            currentPage: 'login'
        });
    } else {
        res.redirect('students');
    }
});

export default router;