// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import terminalService from "../service/terminalService.js";
import logService from "../service/logService.js";
import { apiCode } from "../middleware/apiCode.js";
import {
	getSuccessResponse,
	getCreateResponse,
	getNoContentResponse,
	getBadRequestResponse,
	getNotFoundResponse,
	getConflictResponse,
	getErrorResponse,
	ApiError
} from '../middleware/error.js';

const terminalController = {};

terminalController.read = async(req, res, next) => {
	let sendData;

	try {
		const result = await terminalService.read();
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.detail = async(req, res, next) => {
	let sendData;

	try {
		const { terminalId } = req.params;
		if (terminalId === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await terminalService.detail(terminalId);

		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.NOT_FOUND) sendData = getNotFoundResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.write = async(req, res, next) => {
	let sendData;

	try {
		const { terminalName, supervisorId } = req.body;
		if (supervisorId === undefined || terminalName === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await terminalService.write(terminalName, supervisorId);

		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.modify = async (req, res, next) => {
	let sendData;

	try {
		const { terminalId } = req.params;
		const { terminalName, supervisorId } = req.body;
		if (terminalId === undefined || terminalName === undefined || supervisorId === undefined)
			throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');
		
		const result = await terminalService.modify(terminalId, terminalName, supervisorId);

		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.NOT_FOUND) sendData = getNotFoundResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.remove = async (req, res, next) => {
	let sendData;

	try {
		const { terminalId } = req.params;
		if (terminalId === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await terminalService.remove(terminalId);
		
		sendData = getNoContentResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.NOT_FOUND) sendData = getNotFoundResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.entry = async(req, res, next) => {
	let sendData;

	try {
		const { workerId, terminalId } = req.body;
		if (workerId === undefined || terminalId === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const enterResult = await terminalService.entry(workerId, terminalId);
		const logResult = await logService.write(workerId, terminalId, enterResult);

		const result = {
			enterResult,
			logResult
		};

		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

export default terminalController;