import express from 'express';
import path from 'path';

import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import mongoose from 'mongoose';

import indexRouter from './routes/index.js';
import manufacturerRouter from './routes/manufacturerroute.js';
import categoryRouter from './routes/categoryroute.js';
import computerPartRouter from './routes/computerpartroute.js';
import createRouter from './routes/create.js';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
	helmet({
		contentSecurityPolicy: false,
		crossOriginOpenerPolicy: false,
	})
);
app.use(compression());

app.use('/', indexRouter);
app.use('/manufacturer', manufacturerRouter);
app.use('/category', categoryRouter);
app.use('/computerpart', computerPartRouter);
app.use('/create', createRouter);

app.use(function (req, res, next) {
	res.status(404).render('error');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).render('error');
});

export default app;
