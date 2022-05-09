import express from 'express';
import {
	category_list,
	category_detail,
} from '../controllers/categorycontroller.js';

const router = express.Router();

router.get('/', category_list);

router.get('/:id', category_detail);

export default router;
