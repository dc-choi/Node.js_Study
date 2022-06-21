import express from 'express';
import worker from './worker.js';
import terminal from './terminal.js';

const router = express.Router();

router.use('/worker', worker);
router.use('/terminal', terminal);

export default router;
