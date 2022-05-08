import express from 'express';
import path from 'path';

import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();
// const mongoDB = process.env.MONGODB_URI;
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
	res.status(404).render('error');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).render('error');
});

export default app;
