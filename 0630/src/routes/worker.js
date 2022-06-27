import express from 'express';

import controller from '../controller/workerController.js';

const router = express.Router();

router.get('/', controller.read);
router.get('/:id', controller.detail);
router.post('/', controller.write);
router.put('/:id', controller.modify);
router.delete('/:id', controller.remove);

router.post('/allow', controller.allow);

export default router;
