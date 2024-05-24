import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import 'dotenv/config';  

import indexRoutes from './routes/index.routes.js'
import profesorRoutes from './routes/profesor.routes.js'
import estudianteRoutes from './routes/estudiante.routes.js'
import cursoRoutes from './routes/curso.routes.js'
import adminRoutes from './routes/admin.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(profesorRoutes);
app.use(estudianteRoutes);
app.use(cursoRoutes);
app.use(adminRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`)