import express from 'express';
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
// Allow service of static files in the ../views directory
app.use(express.static(path.join(__dirname, '../public')));


// Basic route to fetch all students
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});