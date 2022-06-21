import express from 'express';
import controller from '../controller/terminalController.js';

const router = express.Router();

router.get('/', controller.read);
router.get('/:id', controller.detail);
router.post('/', controller.write);
router.put('/:id', controller.modify);
router.delete('/:id', controller.remove);

router.post('/enter', controller.enter);

export default router;
