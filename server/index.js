import express from 'express';
import cors from 'cors';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';

const app = express();
app.use(cors());

app.use('/', Route)

const PORT = 8000;

Connection();
DefaultData();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
