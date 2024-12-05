import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.redirect('/login');
    } else {
        res.redirect('/boardgames');
    }
});

router.get('/boardgames', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.redirect('/login');
    } else {
        res.render('boardgames', {
            js : 'boardgames',
            title : 'Board Games',
            currentPage: 'boardgames',
            userType
        });
    }
});

router.get('/publishers', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.redirect('/login');
    } else {
        res.render('publishers', {
            js : 'publishers',
            title : 'Publishers',
            currentPage: 'publishers',
            userType
        });
    }
});

router.get('/categories', (req, res) => {
    let userType = req?.session?.userType || '';
    if (!userType) {
        res.redirect('/login');
    } else {
        res.render('categories', {
            js : 'categories',
            title : 'Categories',
            currentPage: 'categories',
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
        res.redirect('boardgames');
    }
});

export default router;