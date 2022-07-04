import express from 'express';

import controller from '../controller/terminalController.js';

const router = express.Router();

router.get('/', controller.read);
router.get('/:terminalId', controller.detail);
router.post('/', controller.write);
router.put('/:terminalId', controller.modify);
router.delete('/:terminalId', controller.remove);

router.post('/entry', controller.entry);

export default router;
