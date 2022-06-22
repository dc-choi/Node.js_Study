import express from 'express';
import worker from './worker.js';
import terminal from './terminal.js';

const router = express.Router();

/**
 * 1. 터미널과 워커에 대한 부분은 supervisor만 접근 가능하도록 설정해야함.
 * 이 부분은 추후에 로그인 구현으로 마무리 할 것.
 * 
 * 2. 테스트 코드를 작성하여 테스트를 진행하는게 더 좋을거같음.
 * TDD에 대해서 공부를 하는게 좋을거같음.
 */

router.use('/worker', worker);
router.use('/terminal', terminal);

export default router;
