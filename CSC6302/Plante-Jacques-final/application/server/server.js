import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './router/api.js';
import viewRoutes from './router/views.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());
app.use(session({
    secret: 'while-I-should-use-a-library-to-generate-a-key-for-this-for-now-I-have-this-super-secure-secret-key-nobody-will-guess-i-mean-honestly-who-would-think-it-was-just-this?',
    resave: false,
    saveUninitialized: false
}));
// Allow service of static files in the ../views directory
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});