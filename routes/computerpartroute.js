import express from 'express';
import {
	computerpart_detail,
	computerpart_list,
} from '../controllers/computerpartcontroller.js';

const router = express.Router();

router.get('/', computerpart_list);

router.get('/:id', computerpart_detail);

export default router;
