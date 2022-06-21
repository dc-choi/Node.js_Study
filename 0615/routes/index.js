import express from 'express';
import indexController from '../controller/index.js';

const router = express.Router();

router.get('/', indexController.read);
router.get('/:id', indexController.detail);
router.post('/', indexController.write);
router.put('/:id', indexController.modify);
router.delete('/:id', indexController.remove);

export default router;
