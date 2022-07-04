// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import workerService from "../service/workerService.js";
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

const workerController = {};

workerController.read = async(req, res, next) => {
	let sendData;

	try {
		const result = await workerService.read();
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		error.code = error.code || apiCode.INTERNAL_SERVER_ERROR;
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.detail = async(req, res, next) => {
	let sendData;

	try {
		const { workerId } = req.params;
		if (workerId === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await workerService.detail(workerId);

		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.NOT_FOUND) sendData = getNotFoundResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.write = async(req, res, next) => {
	let sendData;

	try {
		const { workerName } = req.body;
		if (workerName === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await workerService.write(workerName);

		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.modify = async (req, res, next) => {
	let sendData;

	try {
		const { workerId } = req.params;
		const { workerName } = req.body;
		if (workerId === undefined || workerName === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await workerService.modify(workerId, workerName);

		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.NOT_FOUND) sendData = getNotFoundResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.remove = async (req, res, next) => {
	let sendData;

	try {
		const { workerId } = req.params;
		if (workerId === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await workerService.remove(workerId);

		sendData = getNoContentResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.NOT_FOUND) sendData = getNotFoundResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.approval = async(req, res, next) => {
	let sendData;

	try {
		const { workerId, terminalId } = req.body;
		if (workerId === undefined || terminalId === undefined) throw new ApiError(apiCode.BAD_REQUEST, 'BAD_REQUEST');

		const result = await workerService.approval(workerId, terminalId);

		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		if (error.code === apiCode.BAD_REQUEST) sendData = getBadRequestResponse(error);
		else if (error.code === apiCode.CONFLICT) sendData = getConflictResponse(error);
		else sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

export default workerController;