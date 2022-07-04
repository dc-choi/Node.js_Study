import express from 'express';

import controller from '../controller/workerController.js';

const router = express.Router();

router.get('/', controller.read);
router.get('/:workerId', controller.detail);
router.post('/', controller.write);
router.put('/:workerId', controller.modify);
router.delete('/:workerId', controller.remove);

router.post('/approval', controller.approval);

export default router;
