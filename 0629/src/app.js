// 본 게시판은 yarn을 통해서 패키지를 관리함.
// 참고: https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-npm%EA%B3%BC-yarn

// express generator를 사용해서 만들면 CJS를 사용하게 됨.
// Node.js 추세가 공식적으로 ESM을 사용함으로써 요즘 추세에 따라 ESM으로 수정함.
// 참고: https://velog.io/@jjunyjjuny/ES-Modules-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0
// 참고: https://ui.toast.com/weekly-pick/ko_20180402
import http from 'http';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import { onError } from './middleware/error.js';
import indexRouter from './routes/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
// 기존 CJS와 다르게 __filename과 __dirname이 없어서 따로 생성해줘야함.
// 참고: https://velog.io/@suyeonpi/Node.js-dirname-is-not-defined-ES6
// 22.06.15 수정 (현재 위치의 절대경로를 불러온다.)
const __filename = path.resolve();
const __dirname = path.dirname(__filename);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`server on`);
}).on('error', onError);
