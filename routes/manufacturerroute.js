import express from 'express';
import {
	manufacturer_list,
	manufacturer_detail,
} from '../controllers/manufacturercontroller.js';

const router = express.Router();

// list of manufacturers
router.get('/', manufacturer_list);

// manufacturer detail
router.get('/:id', manufacturer_detail);

export default router;
