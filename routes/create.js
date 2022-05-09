import express from 'express';
import {
	create_category_get,
	create_category_post,
} from '../controllers/categorycontroller.js';
import {
	create_manufacturer_get,
	create_manufacturer_post,
} from '../controllers/manufacturercontroller.js';

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('create', { title: 'Add Data to Database' });
});

router.get('/category', create_category_get);

router.post('/category', create_category_post);

router.get('/manufacturer', create_manufacturer_get);

router.post('/manufacturer', create_manufacturer_post);

// router.get('computerpart');

export default router;
