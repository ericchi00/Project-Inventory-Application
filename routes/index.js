import express from 'express';
import computerpart_list from '../controllers/computerpartcontroller.js';

const router = express.Router();

router.get('/', computerpart_list);

export default router;
