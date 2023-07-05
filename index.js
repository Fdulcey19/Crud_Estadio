import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './routes/estadios.routes.js'

const app= express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(indexRouter);

app.listen(3098)
console.log(`server on port ${3098}`)